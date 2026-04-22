/**
 * Shared type definitions used by both ddl.ts and tree.ts.
 * Kept in a separate file to avoid circular imports.
 */

// ── ERD output types ──────────────────────────────────────────────────────────

export interface ErdColumn {
    name:     string;
    datatype: string;
}

export interface ErdItem {
    name:    string;
    schema:  string | null;
    columns: ErdColumn[];
    type?:   string;
}

export interface ErdLink {
    source:    string;
    source_id: string;
    target:    string;
    target_id: string;
    mandatory: boolean;
}

export interface ErdOutput {
    items:  ErdItem[];
    links:  ErdLink[];
    groups: Record<string, string[]>;
}

// ── DdlContext ─────────────────────────────────────────────────────────────────

/**
 * The subset of `quicksql` that tree.ts / OracleDDLGenerator depend on.
 * `ddl.ts` implements this; `tree.ts` consumes it as the type of the `ddl`
 * closure variable — keeping the two files decoupled.
 */
export interface DdlContext {
    input:              string;
    getOptionValue(key: string): string | number | boolean | null;
    optionEQvalue(key: string, value: unknown): boolean;
    objPrefix(withoutSchema?: string): string;
    semantics(): string;
    find(name: string): any;                         // DdlNode — typed properly once tree.ts exists
    additionalColumns(): Record<string, string>;
    setOptions(line: string): void;
    forest:             any[];                       // DdlNode[] — same
    postponedAlters:    string[];
    postponedAltersSet: Set<string>;
    data?:              unknown;
}
