# QuickSQL — Oracle MLE + APEX Extension Points

**Status**: Specification  
**Version**: 1.0  
**Author**: Roberto Capancioni — Radicle s.r.l.  
**Date**: 2026-04-24  

---

## Purpose

This document defines the formal extension points for the QuickSQL Oracle MLE + APEX platform integration. Each section describes a pluggable seam in the architecture, its contract, expected data shapes, and the rationale for why the boundary was drawn where it is.

The target audience is a developer who already understands the TypeScript engine (`src/`) and wants to extend the system at the database or APEX layer without forking core code.

---

## Architecture Overview Radicle Quicksql

The system runs in three tiers that must remain strictly decoupled:

```
┌───────────────────────────────────────┐
│  Tier 1 — TypeScript Engine (dist/)   │
│  registerGenerator() / BaseGenerator  │
└────────────────┬──────────────────────┘
                 │ JSON / DDL strings
┌────────────────▼──────────────────────┐
│  Tier 2 — Oracle MLE Module           │
│  QUICKSQL_PKG (PL/SQL façade)         │
│  QUICKSQL_SCHEMA_PKG (schema mgmt)    │
└────────────────┬──────────────────────┘
                 │ ORDS REST + SQL
┌────────────────▼──────────────────────┐
│  Tier 3 — APEX Application            │
│  QSQL Editor Plugin / ERD Viewer      │
└───────────────────────────────────────┘
```

Extension points exist at every tier boundary and within each tier. They are numbered EX-1 through EX-10.

---

## EX-1 — Multi-Dialect Generator Registration

**Tier**: TypeScript Engine  
**Stability**: Stable (v2.0.0 public API)

### Contract

```typescript
// factory.ts
type GeneratorFactory = (ctx: DdlContext) => DDLGenerator;

function registerGenerator(dialect: string, factory: GeneratorFactory): void;
function createGenerator(ctx: DdlContext): DDLGenerator;
```

### How It Works

`createGenerator()` reads `ctx.getOptionValue('dialect')` and dispatches to the matching factory. The `oracle` factory is pre-registered at module load. Any code that calls `registerGenerator()` before calling `toDDL()` / `toERD()` installs a new dialect transparently.

### Implementation Template

```typescript
// postgres-generator.ts
import { BaseGenerator, registerGenerator } from '@oracle/quicksql';
import type { DdlContext, SemanticType, IDdlNode } from '@oracle/quicksql';

class PostgresDDLGenerator extends BaseGenerator {
    colType(sem: SemanticType): string {
        switch (sem.base) {
            case 'varchar':  return `VARCHAR(${sem.varcharLen ?? 4000})`;
            case 'number':   return sem.numericSpec ? `NUMERIC(${sem.numericSpec})` : 'NUMERIC';
            case 'date':     return 'TIMESTAMPTZ';
            case 'clob':     return 'TEXT';
            case 'blob':     return 'BYTEA';
            case 'boolean':  return 'BOOLEAN';
            case 'json':     return 'JSONB';
            default:         return 'TEXT';
        }
    }
    generateDDL(node: IDdlNode): string { /* ... */ return ''; }
    generateDrop(node: IDdlNode): string { /* ... */ return ''; }
    generateFullDDL(): string { /* ... */ return ''; }
}

registerGenerator('postgres', ctx => new PostgresDDLGenerator(ctx));
```

### MLE Binding

When the MLE module is loaded, it can call `registerGenerator()` for additional dialects stored in the `QUICKSQL_DIALECTS` table (EX-10). The APEX session option `dialect` is then passed through `QUICKSQL_PKG.to_ddl(p_qsql, p_options)` as a JSON option.

### Constraints

- Dialect names must be lowercase alphanumeric + hyphens. No spaces.
- A second call with the same dialect name silently replaces the previous factory — callers must version their dialect names if they need coexistence (e.g. `postgres-v2`).
- `BaseGenerator.generateERD()` and `BaseGenerator.generateData()` are dialect-agnostic and are inherited for free; subclasses should not override them unless they have a strong reason.

---

## EX-2 — Lifecycle Hooks (BEFORE / AFTER Events)

**Tier**: Oracle DB (PL/SQL)  
**Stability**: Planned

### Rationale

Lifecycle hooks let teams inject behaviour — notifications, audit entries, CI triggers, approval gates — without modifying `QUICKSQL_PKG`. The alternative (subclassing the package) is not feasible in PL/SQL; a hook table is the standard Oracle extensibility pattern.

### Schema

```sql
CREATE TABLE quicksql_hooks (
    hook_id        NUMBER          GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_name     VARCHAR2(64)    NOT NULL,   -- see event catalogue below
    hook_order     NUMBER          DEFAULT 10 NOT NULL,
    is_active      VARCHAR2(1)     DEFAULT 'Y' CHECK (is_active IN ('Y','N')),
    package_name   VARCHAR2(128)   NOT NULL,   -- schema-qualified if cross-schema
    procedure_name VARCHAR2(128)   NOT NULL,
    description    VARCHAR2(4000),
    created_by     VARCHAR2(128)   DEFAULT SYS_CONTEXT('USERENV','SESSION_USER'),
    created_at     TIMESTAMP       DEFAULT SYSTIMESTAMP
);
```

### Event Catalogue

| `event_name`         | Fired when                                           | Cancelable |
|----------------------|------------------------------------------------------|------------|
| `BEFORE_GENERATE`    | DDL string is about to be produced from QSQL         | Yes        |
| `AFTER_GENERATE`     | DDL string has been produced (read-only inspection)  | No         |
| `BEFORE_DEPLOY`      | `QUICKSQL_PKG.deploy()` is about to execute DDL      | Yes        |
| `AFTER_DEPLOY`       | DDL has been executed successfully                   | No         |
| `BEFORE_DEFINITION_SAVE` | A definition row is about to be INSERT/UPDATE   | Yes        |
| `AFTER_DEFINITION_SAVE`  | A definition row was committed                  | No         |
| `BEFORE_PROMOTE`     | A definition is about to move to a new environment   | Yes        |
| `AFTER_PROMOTE`      | Promotion completed                                  | No         |

### Hook Procedure Contract

Every hook procedure must match this signature exactly:

```sql
PROCEDURE my_hook (
    p_event_name   IN  VARCHAR2,
    p_context      IN  CLOB,        -- JSON: see Context Object below
    p_cancel       OUT VARCHAR2,    -- 'Y' to veto (only for BEFORE_ events)
    p_cancel_reason OUT VARCHAR2    -- human-readable veto reason
);
```

### Context Object (JSON)

```json
{
  "event":         "BEFORE_DEPLOY",
  "definition_id": 42,
  "schema_name":   "HR",
  "definition_name": "employees_schema",
  "target_env":    "TEST",
  "triggered_by":  "RCAPANCIONI",
  "apex_session_id": "7438291847362910",
  "qsql_text":     "employees\n  name vc200 /nn\n  ...",
  "ddl_text":      "CREATE TABLE employees (...)",
  "options":       { "pk": "identity", "auditcols": "yes" }
}
```

### Dispatcher Implementation Sketch

```sql
PROCEDURE fire_hooks (
    p_event    IN VARCHAR2,
    p_context  IN CLOB,
    p_canceled OUT BOOLEAN,
    p_reason   OUT VARCHAR2
) IS
BEGIN
    p_canceled := FALSE;
    FOR h IN (
        SELECT package_name, procedure_name
        FROM   quicksql_hooks
        WHERE  event_name = p_event AND is_active = 'Y'
        ORDER  BY hook_order
    ) LOOP
        DECLARE
            l_cancel        VARCHAR2(1)    := 'N';
            l_cancel_reason VARCHAR2(4000);
        BEGIN
            EXECUTE IMMEDIATE
                'BEGIN ' || h.package_name || '.' || h.procedure_name ||
                '(:1,:2,:3,:4); END;'
                USING IN p_event, IN p_context,
                      OUT l_cancel, OUT l_cancel_reason;

            IF l_cancel = 'Y' THEN
                p_canceled := TRUE;
                p_reason   := l_cancel_reason;
                RETURN;  -- first veto wins; remaining hooks are not called
            END IF;
        EXCEPTION
            WHEN OTHERS THEN
                -- log but do not propagate — a broken hook must not block the main flow
                INSERT INTO quicksql_hook_errors(hook_id, error_text, fired_at)
                VALUES (h.hook_id, SQLERRM, SYSTIMESTAMP);
        END;
    END LOOP;
END fire_hooks;
```

### Security Consideration

Hook procedures run with the invoker's rights of `QUICKSQL_PKG`. Grant `EXECUTE` only to trusted schemas. Add a `CREATED_BY_SCHEMA` column and enforce schema ownership if multi-tenant deployment is required.

---

## EX-3 — Pluggable Validators

**Tier**: Oracle DB (PL/SQL)  
**Stability**: Planned

### Rationale

The TypeScript engine already performs structural validation (`errorMsgs.ts`). DB-side validators extend this with governance rules that are environment-specific and can reference the data dictionary — for example, "no table name may already exist in the target schema", "all FK references must resolve to a deployed table", or "tables with PII columns require audit columns".

### Schema

```sql
CREATE TABLE quicksql_validators (
    validator_id     NUMBER          GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    validator_name   VARCHAR2(128)   NOT NULL UNIQUE,
    applies_to       VARCHAR2(32)    DEFAULT 'ALL'
                     CHECK (applies_to IN ('ALL','TABLE','VIEW','TRIGGER','COLUMN')),
    severity         VARCHAR2(10)    DEFAULT 'ERROR'
                     CHECK (severity IN ('ERROR','WARNING','INFO')),
    is_active        VARCHAR2(1)     DEFAULT 'Y' CHECK (is_active IN ('Y','N')),
    package_name     VARCHAR2(128)   NOT NULL,
    function_name    VARCHAR2(128)   NOT NULL,
    description      VARCHAR2(4000),
    ordering         NUMBER          DEFAULT 50
);
```

### Validator Function Contract

```sql
-- Must return a JSON array of validation messages (empty array = no issues)
FUNCTION validate_my_rule (
    p_definition_id IN NUMBER,
    p_qsql_text     IN CLOB,
    p_options       IN CLOB   -- JSON options object
) RETURN CLOB;  -- JSON: [{severity, code, message, node_name}]
```

Return value schema:

```json
[
  {
    "severity": "ERROR",
    "code":     "NM-001",
    "message":  "Table EMPLOYEES already exists in schema HR",
    "node_name": "employees"
  }
]
```

### Integration with `QUICKSQL_PKG.validate()`

```sql
FUNCTION validate (
    p_definition_id IN NUMBER
) RETURN CLOB IS   -- returns merged JSON array
    l_results CLOB := '[]';
BEGIN
    -- 1. Run TypeScript engine validation via MLE
    l_results := mle_module.call_ts_validate(p_definition_id);

    -- 2. Run registered DB validators
    FOR v IN (
        SELECT * FROM quicksql_validators
        WHERE  is_active = 'Y'
        ORDER  BY ordering
    ) LOOP
        DECLARE l_partial CLOB; BEGIN
            EXECUTE IMMEDIATE
                'BEGIN :1 := ' || v.package_name || '.' || v.function_name ||
                '(:2, :3, :4); END;'
                USING OUT l_partial,
                      IN p_definition_id,
                      IN get_qsql_text(p_definition_id),
                      IN get_options_json(p_definition_id);
            l_results := json_array_append(l_results, l_partial);
        EXCEPTION WHEN OTHERS THEN NULL; -- never block on validator crash
        END;
    END LOOP;
    RETURN l_results;
END validate;
```

### Built-in Validators to Ship at v1

| Code    | Severity | Description                                              |
|---------|----------|----------------------------------------------------------|
| `EX-001`| ERROR    | Duplicate table name within the same definition          |
| `EX-002`| ERROR    | FK references a table not in the definition              |
| `EX-003`| WARNING  | Table name exceeds Oracle 30-char identifier limit (pre-12.2) |
| `EX-004`| WARNING  | No primary key declared and `genpk: no`                  |
| `EX-005`| INFO     | Audit columns active but no `updated_by` column found    |

---

## EX-4 — Alternative Layout Renderers

**Tier**: APEX / JavaScript  
**Stability**: Planned

### Rationale

AntV X6 is the default ERD renderer. Some users need to export to Mermaid (embeddable in Confluence), Graphviz (batch SVG generation), or LucidChart (import format). The renderer is the only consumer of `ErdOutput`; swapping it must not affect DDL generation.

### `ErdOutput` Contract (from `types.ts`)

```typescript
interface ErdOutput {
    items:  ErdItem[];   // nodes (tables/views)
    links:  ErdLink[];   // edges (FK relationships)
    // renderer-specific position data is NOT part of this contract
}

interface ErdItem {
    id:      string;
    label:   string;
    columns: ErdColumn[];
}

interface ErdLink {
    source:   string;   // item id
    target:   string;
    label?:   string;
    fromCol:  string;
    toCol:    string;
}
```

### Renderer Interface (JavaScript, APEX plugin)

```javascript
/** @interface ErdRenderer */
const ErdRendererInterface = {
    /**
     * @param {ErdOutput} erdData
     * @param {Map<string,{x:number,y:number}>} positions  -- persisted layout
     * @param {HTMLElement} container
     * @param {object} options
     */
    render(erdData, positions, container, options) {},

    /**
     * Called when the user requests to save the current layout.
     * @returns {Map<string,{x:number,y:number}>}
     */
    getPositions() { return new Map(); },

    /** Called before the container is removed or the renderer is swapped. */
    destroy() {}
};
```

### Registration

```javascript
// In the APEX plugin JS file or page-level JS
QuickSQL.renderers.register('mermaid', {
    render(erdData, positions, container, options) {
        container.innerHTML = '<pre class="mermaid">' +
            erdToMermaid(erdData) + '</pre>';
        window.mermaid?.init(undefined, container.querySelectorAll('.mermaid'));
    },
    getPositions() { return new Map(); },
    destroy() {}
});

// Activate via APEX plugin attribute
QuickSQL.renderers.activate('mermaid');
```

### Mermaid Export Shape

```
erDiagram
    DEPARTMENTS ||--o{ EMPLOYEES : "dept_id"
    EMPLOYEES {
        NUMBER id PK
        VARCHAR2 name
        NUMBER dept_id FK
    }
```

### Constraints

- The default `antv-x6` renderer owns position persistence (read/write to `QUICKSQL_LAYOUTS`). Alternative renderers that do not support drag-and-drop should return an empty `Map` from `getPositions()`.
- Thumbnail generation (EX-5) is triggered by the active renderer's `getPositions()` call returning a non-empty map, so static renderers simply skip it.

---

## EX-5 — ERD Thumbnail Generation and Storage

**Tier**: Oracle DB + APEX  
**Stability**: Planned

### Rationale

Storing an SVG thumbnail of the ERD alongside the definition row enables a visual gallery view in APEX and inline previews in approval workflows without requiring the full ERD renderer to load.

### Schema Addition to `QUICKSQL_DEFINITIONS`

```sql
ALTER TABLE quicksql_definitions ADD (
    erd_thumbnail      CLOB,            -- SVG string, max ~100KB
    erd_thumbnail_at   TIMESTAMP,       -- when it was last regenerated
    erd_thumbnail_hash VARCHAR2(64)     -- SHA-256 of qsql_text at last render
);
```

Regeneration is skipped when `SHA256(current_qsql_text) = erd_thumbnail_hash`, avoiding expensive SVG computation on every save.

### Generation Trigger

The APEX ERD Viewer plugin calls a REST endpoint after a successful `saveLayout`:

```
POST /ords/quicksql/api/definitions/{id}/thumbnail
Content-Type: application/json

{
  "svg": "<svg xmlns=... >...</svg>"
}
```

The client-side renderer serializes the current X6 graph to SVG using `graph.toSVG()` before sending.

### DB Procedure

```sql
PROCEDURE save_thumbnail (
    p_definition_id IN NUMBER,
    p_svg           IN CLOB
) IS
    l_hash VARCHAR2(64);
BEGIN
    SELECT STANDARD_HASH(qsql_text, 'SHA256')
    INTO   l_hash
    FROM   quicksql_definitions
    WHERE  definition_id = p_definition_id;

    UPDATE quicksql_definitions
    SET    erd_thumbnail      = p_svg,
           erd_thumbnail_at   = SYSTIMESTAMP,
           erd_thumbnail_hash = l_hash
    WHERE  definition_id = p_definition_id;
END save_thumbnail;
```

### APEX Display

An APEX Classic Report or Cards region can render the thumbnail directly from the DB column using an `<img src="data:image/svg+xml;charset=utf-8,...">` substitution.

---

## EX-6 — Schema Dependency Tracking

**Tier**: Oracle DB  
**Stability**: Planned

### Rationale

Definitions frequently reference objects defined in other definitions (e.g., a lookup schema and a transactional schema sharing FK targets). Without explicit dependency tracking, deployment order is undefined and circular deployments go undetected.

### Schema

```sql
CREATE TABLE quicksql_dependencies (
    dependency_id     NUMBER        GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    definition_id     NUMBER        NOT NULL REFERENCES quicksql_definitions,
    depends_on_id     NUMBER        NOT NULL REFERENCES quicksql_definitions,
    dependency_type   VARCHAR2(32)  DEFAULT 'FK_REFERENCE'
                      CHECK (dependency_type IN ('FK_REFERENCE','SHARED_SEQUENCE','VIEW_BASE','EXPLICIT')),
    resolved          VARCHAR2(1)   DEFAULT 'N' CHECK (resolved IN ('Y','N')),
    created_at        TIMESTAMP     DEFAULT SYSTIMESTAMP,
    CONSTRAINT uq_qsql_dep UNIQUE (definition_id, depends_on_id)
);
```

`dependency_type` values:

| Value | Meaning |
|-------|---------|
| `FK_REFERENCE` | Auto-detected: a FK in `definition_id` targets a table only in `depends_on_id` |
| `SHARED_SEQUENCE` | Both definitions share an Oracle sequence object |
| `VIEW_BASE` | A view in `definition_id` selects from a table in `depends_on_id` |
| `EXPLICIT` | Manually declared by the developer |

### Auto-Detection

After each `AFTER_DEFINITION_SAVE` hook fires, an internal procedure runs:

```sql
PROCEDURE detect_dependencies (p_definition_id IN NUMBER) IS
BEGIN
    -- 1. Parse FK targets from the QSQL AST (via MLE call)
    -- 2. Match target table names against all other definitions' object lists
    -- 3. INSERT into quicksql_dependencies for new matches
    -- 4. DELETE rows whose FK targets no longer exist in the saved QSQL
    NULL; -- implementation placeholder
END detect_dependencies;
```

### Topological Sort for Deployment

`QUICKSQL_SCHEMA_PKG.deploy_ordered(p_definition_ids IN SYS.ODCINUMBERLIST)` uses a Kahn's-algorithm implementation in PL/SQL over the dependency graph to produce a deterministic deployment order. It raises `ORA-20001` if a cycle is detected.

---

## EX-7 — Multi-Environment Promotion

**Tier**: Oracle DB + ORDS  
**Stability**: Planned

### Rationale

DDL must travel from DEV → TEST → PROD with a clear audit trail and rollback path. Promotion is not just a copy operation — it includes snapshot capture, pre-deployment validation, and post-deployment verification.

### Schema

```sql
CREATE TABLE quicksql_environments (
    env_id         NUMBER         GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    env_name       VARCHAR2(64)   NOT NULL UNIQUE,   -- 'DEV', 'TEST', 'PROD'
    env_order      NUMBER         NOT NULL,           -- sort: DEV=1, TEST=2, PROD=3
    db_link_name   VARCHAR2(128),                     -- NULL = current DB
    target_schema  VARCHAR2(128)  NOT NULL,
    requires_approval VARCHAR2(1) DEFAULT 'N' CHECK (requires_approval IN ('Y','N'))
);

CREATE TABLE quicksql_promotions (
    promotion_id       NUMBER        GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    definition_id      NUMBER        NOT NULL REFERENCES quicksql_definitions,
    from_env_id        NUMBER        NOT NULL REFERENCES quicksql_environments,
    to_env_id          NUMBER        NOT NULL REFERENCES quicksql_environments,
    status             VARCHAR2(32)  DEFAULT 'PENDING'
                       CHECK (status IN ('PENDING','IN_REVIEW','APPROVED','DEPLOYING','DEPLOYED','FAILED','ROLLED_BACK')),
    qsql_snapshot      CLOB          NOT NULL,   -- point-in-time copy of QSQL text
    ddl_snapshot       CLOB,                      -- DDL generated at promotion time
    options_snapshot   CLOB,                      -- JSON options snapshot
    requested_by       VARCHAR2(128),
    requested_at       TIMESTAMP     DEFAULT SYSTIMESTAMP,
    approved_by        VARCHAR2(128),
    approved_at        TIMESTAMP,
    deployed_at        TIMESTAMP,
    deployment_log     CLOB          -- SQL*Plus / SQLcl output
);
```

### Promotion State Machine

```
PENDING ──► IN_REVIEW ──► APPROVED ──► DEPLOYING ──► DEPLOYED
                │                            │
                ▼                            ▼
           (rejected)                     FAILED ──► ROLLED_BACK
```

- Only environments with `requires_approval = 'Y'` transit through `IN_REVIEW`.
- The `BEFORE_PROMOTE` hook (EX-2) fires at `PENDING → IN_REVIEW` or `PENDING → DEPLOYING` depending on the environment configuration.
- `DEPLOYING → DEPLOYED` transition is committed only after post-deployment validation succeeds.

### ORDS Endpoint

```
POST /ords/quicksql/api/definitions/{id}/promote
{
  "to_env": "TEST",
  "comment": "Approved for integration testing"
}
```

---

## EX-8 — Approval Workflow

**Tier**: Oracle DB + APEX  
**Stability**: Planned

### Rationale

For environments where `requires_approval = 'Y'`, changes must be reviewed before deployment. APEX Approvals (native since APEX 22.1) or a custom lightweight workflow both satisfy this. The extension point is the PL/SQL package interface that the workflow calls — decoupling the workflow engine from the deployment engine.

### Workflow Package Interface

```sql
-- Any approval engine must implement this package spec:
CREATE OR REPLACE PACKAGE quicksql_approval_api AS
    -- Called when a promotion enters IN_REVIEW
    PROCEDURE request_approval (
        p_promotion_id   IN NUMBER,
        p_requestor      IN VARCHAR2,
        p_comment        IN VARCHAR2 DEFAULT NULL
    );

    -- Called by approver action (APEX button or REST)
    PROCEDURE approve (
        p_promotion_id   IN NUMBER,
        p_approver       IN VARCHAR2,
        p_comment        IN VARCHAR2 DEFAULT NULL
    );

    -- Called by approver action (APEX button or REST)
    PROCEDURE reject (
        p_promotion_id   IN NUMBER,
        p_approver       IN VARCHAR2,
        p_reason         IN VARCHAR2
    );

    -- Returns current status + approver comments as JSON
    FUNCTION get_status (
        p_promotion_id IN NUMBER
    ) RETURN CLOB;
END quicksql_approval_api;
```

### Default Implementation

The default implementation is a simple single-approver model stored in `quicksql_promotions`. It fires an APEX notification (using `APEX_MAIL` or `APEX_NOTIFICATION`) to the DBA group.

### APEX Native Approvals Binding

When APEX Approvals is available, `request_approval` calls `APEX_APPROVAL.CREATE_TASK(...)` and `approve`/`reject` call `APEX_APPROVAL.COMPLETE_TASK(...)`. The package body is swapped at install time based on `APEX_RELEASE` version detection.

---

## EX-9 — CI/CD SQLcl Integration

**Tier**: DevOps / External  
**Stability**: Planned

### Rationale

QuickSQL DDL must be consumable by SQLcl-based pipelines (Liquibase changesets, Flyway migrations, `sql cl` deploy scripts) without requiring a manual APEX session. The integration point is a REST API callable from a CI runner.

### REST Endpoints for CI/CD

```
# 1. Generate DDL from QSQL text (no DB state required)
POST /ords/quicksql/api/generate
Content-Type: application/json
Authorization: Basic <service-account>
{
  "qsql":    "employees /insert\n  name vc200\n",
  "options": { "pk": "identity", "auditcols": "yes" }
}
→ 200 { "ddl": "CREATE TABLE ...", "errors": [] }

# 2. Deploy a stored definition to a named environment
POST /ords/quicksql/api/definitions/{id}/deploy
{
  "env":     "TEST",
  "dry_run": false
}
→ 200 { "promotion_id": 17, "status": "DEPLOYED", "log": "..." }

# 3. Export as Liquibase changeset
GET /ords/quicksql/api/definitions/{id}/export?format=liquibase&env=TEST
→ 200  application/xml  (Liquibase changeSet XML)
```

### SQLcl Script Example

```bash
#!/bin/bash
# CI pipeline step: deploy to TEST on merge to 'test' branch
sql -s ${DB_CONN} <<EOF
  REST POST ${QUICKSQL_BASE_URL}/api/definitions/${DEF_ID}/deploy \
    -b '{"env":"TEST","dry_run":false}' \
    -H "Authorization: Basic ${API_TOKEN}"
EOF
```

### Liquibase Changeset Format

Each deployed DDL statement maps to one `<changeSet>` with:
- `id` = `qsql-def-{definition_id}-{table_name}-{timestamp}`
- `author` = promotion `requested_by`
- `runOnChange` = false (immutable once applied)
- A matching `<rollback>` section generated from `generateDrop()` output

---

## EX-10 — Pluggable Diff / Migration Engine

**Tier**: TypeScript Engine + Oracle DB  
**Stability**: Research

### Rationale

When a definition is updated after initial deployment, QuickSQL needs to compute the delta — what `ALTER TABLE` / `DROP COLUMN` / `ADD CONSTRAINT` statements migrate the current DB state to the new target state. This is a hard problem with multiple valid strategies (aggressive vs. conservative, rename-detection heuristics). The diff engine is therefore a pluggable strategy.

### TypeScript Interface

```typescript
// diff-engine.ts (not yet implemented)
interface SchemaDiff {
    added:    DiffStatement[];
    modified: DiffStatement[];
    dropped:  DiffStatement[];
    warnings: string[];   // e.g., "column rename is ambiguous — check manually"
}

interface DiffStatement {
    objectType: 'TABLE' | 'COLUMN' | 'CONSTRAINT' | 'INDEX' | 'TRIGGER';
    objectName: string;
    sql:        string;
    reverseSql: string;   // rollback DDL
    isDestructive: boolean;
}

type DiffEngine = (
    baseline: ErdOutput,   // previously deployed schema
    target:   ErdOutput,   // new desired schema
    options:  DdlContext
) => SchemaDiff;

// Registration
const diffEngines = new Map<string, DiffEngine>();
function registerDiffEngine(name: string, engine: DiffEngine): void {
    diffEngines.set(name, engine);
}
function getDiffEngine(name = 'conservative'): DiffEngine {
    return diffEngines.get(name) ?? conservativeDiffEngine;
}
```

### Built-in Strategy: `conservative`

- Never emits `DROP COLUMN` — raises a warning instead.
- Detects column renames only when `--rename-threshold 0.8` similarity is met on data-type + position.
- Emits `MODIFY` for type changes only when the change is known-safe (varchar widening, numeric precision increase).

### Built-in Strategy: `aggressive`

- Emits `DROP COLUMN` for removed columns.
- Emits `DROP TABLE` + `CREATE TABLE` for table renames.
- Should only be used in DEV environments.

### DB-Side Baseline Storage

```sql
ALTER TABLE quicksql_promotions ADD (
    erd_snapshot_json CLOB   -- JSON of ErdOutput at deployment time
);
```

`erd_snapshot_json` is the baseline for the next diff. The diff engine reads it from `QUICKSQL_SCHEMA_PKG.get_deployed_erd(p_definition_id, p_env)`.

---

## Cross-Cutting Concerns

### Observability

Every extension point should write to `QUICKSQL_AUDIT_LOG`:

```sql
CREATE TABLE quicksql_audit_log (
    log_id         NUMBER          GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_type     VARCHAR2(64)    NOT NULL,
    definition_id  NUMBER,
    env_name       VARCHAR2(64),
    actor          VARCHAR2(128)   DEFAULT SYS_CONTEXT('USERENV','SESSION_USER'),
    detail_json    CLOB,
    status         VARCHAR2(32),
    duration_ms    NUMBER,
    logged_at      TIMESTAMP       DEFAULT SYSTIMESTAMP
);
```

### Idempotency

All REST endpoints that mutate state (deploy, promote, save-layout) must be idempotent. Clients may retry on network error; the server must detect duplicates via a client-supplied `idempotency_key` header mapped to a UUID stored in `quicksql_audit_log`.

### Versioning

Extension point contracts are versioned at the package level:

```sql
FUNCTION api_version RETURN VARCHAR2;   -- e.g. '1.3'
```

Breaking changes increment the major version. The APEX plugin reads `api_version` at startup and disables incompatible features with a visible warning rather than silently misbehaving.

### Naming Conventions

All DB objects created by this platform use the `QUICKSQL_` prefix. Customer-provided hook and validator packages must not use this prefix (enforced by `QUICKSQL_SCHEMA_PKG` at registration time).

---

## Revision History

| Version | Date       | Author              | Notes                         |
|---------|------------|---------------------|-------------------------------|
| 1.0     | 2026-04-24 | Roberto Capancioni  | Initial specification draft   |
