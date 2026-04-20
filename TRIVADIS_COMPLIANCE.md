# Trivadis Oracle PL/SQL Coding Guidelines — Compliance Status

This document tracks the compliance of **quicksql** DDL/PL/SQL generation against the
[Trivadis PL/SQL & SQL Coding Guidelines](https://trivadis.github.io/plsql-and-sql-coding-guidelines/)
(reference CSV: `g_rules_summary.csv`, rule docs: `rules_docs/`).

Rules are grouped by status. Only rules relevant to **generated** PL/SQL code are evaluated
(quicksql generates triggers, TAPI packages, views and INSERT scripts — not user application code).

---

## ✅ Compliant (implemented or not applicable)

| Rule | Description | Notes |
|------|-------------|-------|
| G-1040 | Avoid dead code | `procBody` dead-code paths removed (get early-return; dead `c1.field` row assignments; dead `end loop` finale) |
| G-2140 | Never initialize variables with NULL | Generated code does not initialize variables to NULL |
| G-2180 | Never use quoted identifiers | `naming.js::quoteIdentifier()` only quotes identifiers that genuinely require it (special chars, digit start); lowercase names are **not** quoted |
| G-2210 | Avoid NUMBER without precision | TAPI procedure parameters changed from `number` → `integer`; `getPkType()` returns `integer` for generated PKs; FK params default to `integer` |
| G-3120 | Use table aliases in multi-table SQL | `generateView()` uses `aliasMap` for per-table aliases; `generateResolvedView()` uses `k`/`t` aliases — both multi-table queries are compliant |
| G-3145 | Avoid `SELECT *` | TAPI `get_row` replaced `FOR c IN (SELECT * …)` cursor loop with explicit-column `SELECT … INTO` (G-4387 also addressed) |
| G-4320 | Label loops | WHILE loop in `_generateBITrigger` carries `<<compress_loop>>` label |
| G-4330 | Use cursor FOR LOOP or SELECT INTO | Single-row PK lookup in TAPI `get_row` now uses `SELECT INTO` with `NO_DATA_FOUND` handler instead of a cursor FOR LOOP |
| G-4387 | Never use FOR LOOP for single-row queries | Addressed — see G-4330 |
| G-5050 | No hardcoded error numbers | Immutable trigger uses named constants `co_immutable_err` / `co_immutable_msg` in a DECLARE block instead of a literal `-20055` |
| G-7730 | Avoid multiple DML events per trigger | Combined `BEFORE INSERT OR UPDATE` trigger split into two separate triggers (`_bi`, `_bu`) |
| G-7740 | No PK assignment in multi-event trigger | Not strictly applicable (PK is set as column DEFAULT, never in a trigger); trigger split satisfies G-7730 regardless |

---

## ⚠️ Partially compliant / known limitations

### G-2210 — NUMBER without precision (partial)

**What was fixed:** TAPI procedure parameters (`get_row`, `insert_row`, `update_row`, `delete_row`) now
use `integer` instead of bare `number`.

**Remaining issue:** The generated **table DDL** itself still emits `number` (no precision) for
auto-generated ID columns (e.g. `id  number  default on null …`). This is in `generateTable`
([src/tree.js](src/tree.js) line ~933).

Changing that line would alter the column storage type in the database. The Trivadis rule targets
*PL/SQL variables/constants*, not DDL column definitions, so the table DDL is lower priority.
However, using `integer` (or `number(18)`) would be cleaner and align with Oracle best practice.

**Suggested fix:**
```javascript
// src/tree.js ~line 933
ret += tab + idColName + pad + 'integer ' + typeModifier + '\n';
```

---

### G-5050 — No centralized error package (partial)

**What was fixed:** The immutable trigger now uses named constants declared inline in its own
`DECLARE` block rather than a literal error code.

**Remaining issue:** Trivadis G-5050 ideally requires a **centralized application error package**
(e.g. `app_err`) that owns all error codes and messages. quicksql generates standalone objects
per table, so each immutable trigger defines its own constants independently. There is no
mechanism to emit a shared error package.

**Impact:** Low. The generated code is fully functional and avoids magic numbers. A centralized
package is an architectural concern for the consuming application, outside quicksql's scope.

---

### G-1010 — Label sub-blocks (optional, rating 63)

Trivadis recommends labeling every named PL/SQL block. The anonymous `begin … end;` block of
generated immutable triggers is not labeled. Usage rating is **O** (optional, score 63).

**Example of what is generated:**
```sql
create or replace trigger trg_employees_insertonly
    before update or delete on employees
declare
    co_immutable_err  constant pls_integer       := -20055;
    co_immutable_msg  constant varchar2(200 char) := 'employees is immutable';
begin
    raise_application_error(co_immutable_err, co_immutable_msg);
end;
```

A labeled block would be:
```sql
begin
    <<check_immutable>>
    raise_application_error(co_immutable_err, co_immutable_msg);
end;
```

This is cosmetic and not required.

---

### G-3150 — Use identity columns for surrogate keys (optional, rating 60)

The default quicksql PK option is `guid` (a `number` column with
`DEFAULT ON NULL TO_NUMBER(SYS_GUID(), 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')`).
Trivadis recommends `GENERATED ALWAYS AS IDENTITY` for surrogate numeric PKs.

quicksql **does** support identity columns via `pk:identityDataType` option — the rule is not
violated when that option is used. The default choice of `guid` is a product design decision
(avoids sequence cache issues in RAC environments, works with older DB versions).

**Usage rating:** O (optional, score 60) — not a compliance blocker.

---

### G-7310 / G-7410 — Avoid standalone procedures/functions (rating 74)

quicksql generates **package bodies** for TAPI (not standalone procedures). This rule is
compliant for TAPI output. However, quicksql does **not** emit any wrapper package for the
generated triggers — triggers are always standalone objects by Oracle language definition and
cannot be placed inside a package.

---

## ❌ Out of scope / not applicable

| Rule | Reason |
|------|--------|
| G-1020 | Loop labels for blocks: not generated by quicksql |
| G-1030 | Unused variables: not generated by quicksql |
| G-1050 | Literals in code: generated code deliberately uses literals (table names, column names) |
| G-2110–G-2190 | Variable declaration style: generated code uses direct type names, not anchored %TYPE (anchoring requires runtime schema knowledge) |
| G-3210/G-3220 | BULK COLLECT/FORALL: not generated (INSERT scripts use simple DML) |
| G-4210–G-4390 | Control flow style (CASE vs IF, EXIT WHEN, etc.): generated triggers use minimal branching |
| G-5010–G-5080 | Error handling framework: application-level concern, outside quicksql scope |
| G-6010–G-6020 | Dynamic SQL: quicksql does not generate dynamic SQL |
| G-7110–G-7250 | Package coding style: TAPI packages are simple enough to not require forward declarations, etc. |
| G-8110–G-8510 | Existence checks, synonyms, app locks, DBMS_APPLICATION_INFO: application-level concerns |
| G-9010–G-9040 | Date/number conversion format models: not generated by quicksql |

---

*Last updated: 2026-04-20 — applies to quicksql main branch after Trivadis compliance pass.*
