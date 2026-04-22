/* globals __PACKAGE_VERSION__ */
declare const __PACKAGE_VERSION__: string | undefined;

import tree, { OracleDDLGenerator } from './tree.js';
import lexer from './lexer.js';
import json2qsql from './json2qsql.js';
import errorMsgs from './errorMsgs.js';
import { singular, canonicalObjectName, getMajorVersion } from './naming.js';
import split_str from './split_str.js';
import type { DdlContext, ErdColumn, ErdItem, ErdLink, ErdOutput } from './types.js';
export type { DdlContext, ErdColumn, ErdItem, ErdLink, ErdOutput };

// ── PK / date-type canonical string constants ────────────────────────────────

const identityDataType = 'identityDataType';
const guid             = 'guid';
const tswtz            = 'Timestamp with time zone';
const tswltz           = 'Timestamp with local time zone';

// ── Types ────────────────────────────────────────────────────────────────────

interface OptionDef {
    label:   string;
    value:   string | number | boolean;
    check?:  string[];
}

/** Mutable copy of the options record built per-instance from defaultOptions. */
type OptionsRecord = Record<string, OptionDef>;

// ── normalize() ──────────────────────────────────────────────────────────────

type NormalizedValue = string | boolean | null;

function normalize(input: unknown): NormalizedValue {
    if (input == null) return null;
    const s = typeof input === 'string' ? input.toLowerCase() : input;
    if (s === 'yes'   || s === 'y'    || s === 'true'  || s === true)  return true;
    if (s === 'no'    || s === 'n'    || s === 'false'  || s === false) return false;
    if (s === identityDataType.toLowerCase()) return 'identity';
    if (s === guid.toLowerCase())             return 'guid';
    if (s === tswtz.toLowerCase())            return 'tswtz';
    if (s === tswltz.toLowerCase())           return 'tswltz';
    return typeof s === 'string' ? s : String(s);
}

// ── Default options ───────────────────────────────────────────────────────────

const defaultOptions: OptionsRecord = {
    apex:             { label: 'APEX',                          value: 'no',      check: ['yes','no'] },
    auditcols:        { label: 'Audit Columns',                 value: 'no',      check: ['yes','no'] },
    createdcol:       { label: 'Created Column Name',           value: 'created' },
    createdbycol:     { label: 'Created By Column Name',        value: 'created_by' },
    updatedcol:       { label: 'Updated Column Name',           value: 'updated' },
    updatedbycol:     { label: 'Updated By Column Name',        value: 'updated_by' },
    auditdate:        { label: 'Audit Column Date Type',        value: '' },
    aienrichment:     { label: 'AI Enrichment',                 value: 'no',      check: ['yes','no'] },
    boolean:          { label: 'Boolean Datatype',              value: 'not set', check: ['yn','native'] },
    genpk:            { label: 'Auto Primary Key',              value: 'yes',     check: ['yes','no'] },
    semantics:        { label: 'Character Strings',             value: 'CHAR',    check: ['BYTE','CHAR','Default'] },
    language:         { label: 'Data Language',                 value: 'EN',      check: ['EN','JP','KO'] },
    datalimit:        { label: 'Data Limit Rows',               value: 10000 },
    date:             { label: 'Date Data Type',                value: 'DATE',    check: ['DATE','TIMESTAMP',tswtz,tswltz] },
    db:               { label: 'Database Version',              value: 'not set' },
    dv:               { label: 'Duality View',                  value: 'no',      check: ['yes','no'] },
    drop:             { label: 'Include Drops',                 value: 'no',      check: ['yes','no'] },
    editionable:      { label: 'Editinable',                    value: 'no',      check: ['yes','no'] },
    inserts:          { label: 'Generate Inserts',              value: true,      check: ['yes','no'] },
    namelen:          { label: 'Name Character Length',         value: 255 },
    overridesettings: { label: 'Ignore toDDL() second parameter', value: 'no',   check: ['yes','no'] },
    prefix:           { label: 'Object Prefix',                 value: '' },
    pk:               { label: 'Primary Key Maintenance',       value: guid,      check: [identityDataType, guid, 'SEQ', 'NONE'] },
    prefixpkwithtname:{ label: 'Prefix primary keys with table name', value: 'no', check: ['yes','no'] },
    rowkey:           { label: 'Alphanumeric Row Identifier',   value: 'no',      check: ['yes','no'] },
    rowversion:       { label: 'Row Version Number',            value: 'no',      check: ['yes','no'] },
    schema:           { label: 'Schema',                        value: '' },
    api:              { label: 'Table API',                     value: 'no',      check: ['yes','no'] },
    compress:         { label: 'Table Compression',             value: 'no',      check: ['yes','no'] },
    transcontext:     { label: 'Translation Context',           value: "sys_context('APP_CTX','LANG')" },
};

// ── quicksql class ────────────────────────────────────────────────────────────

export class quicksql implements DdlContext {

    // ── Cached output (null = not yet generated) ──
    private _ddl:    string     | null = null;
    private _erd:    ErdOutput  | null = null;
    private _errors: unknown[]  | null = null;

    // ── State ──
    input:              string;
    options:            OptionsRecord;
    forest:             any[];          // ddlnode[] — TODO: type when tree.ts is migrated
    postponedAlters:    string[]      = [];
    postponedAltersSet: Set<string>   = new Set();
    data?:              unknown;       // optional pre-loaded data object for generateData()

    private _labelToKey: Record<string, string> = {};
    name2node:           Record<string, any> | null = null;

    constructor(fullInput: string, options?: unknown) {
        this.options = JSON.parse(JSON.stringify(defaultOptions)) as OptionsRecord;
        this.input   = fullInput;

        // Build label→key reverse-lookup for getOptionValue()
        for (const x in this.options) {
            const lbl = this.options[x].label;
            if (lbl != null) this._labelToKey[lbl.toLowerCase()] = x;
        }

        // Apply external options override if not suppressed by overridesettings
        let prefix = '';
        if (fullInput.toLowerCase().includes('overridesettings'))
            tree(this);   // parse just enough to read overridesettings
        if (options !== undefined && this.optionEQvalue('overrideSettings', false))
            prefix = '# settings = ' + String(options) + '\n\n';

        this.input  = prefix + fullInput;
        this.forest = tree(this) as any[];
    }

    // ── Option access ─────────────────────────────────────────────────────────

    getOptionValue(kEy: string): string | number | boolean | null {
        const key    = kEy.toLowerCase();
        let   option = this.options[key];
        if (!(key in this.options)) {
            const mapped = this._labelToKey[key];
            if (mapped != null) option = this.options[mapped];
        }
        return option?.value ?? null;
    }

    optionEQvalue(key: string, value: unknown): boolean {
        // eslint-disable-next-line eqeqeq -- intentional loose comparison after normalize()
        return normalize(this.getOptionValue(key)) == normalize(value);
    }

    setOptionValue(kEy: string, value: unknown): void {
        const key = kEy.toLowerCase();
        if (!(key in this.options)) {
            for (const x in this.options) {
                if (this.options[x].label === kEy) {
                    this.options[x].value = (value ?? '') as string | number | boolean;
                    return;
                }
            }
        }
        const v = value ?? '';
        let option = this.options[key];
        if (option == null) {
            option = { label: key, value: v as string | number | boolean };
            this.options[key] = option;
        } else {
            option.value = v as string | number | boolean;
        }
    }

    nonDefaultOptions(): Record<string, unknown> {
        const ret: Record<string, unknown> = {};
        for (const x in this.options)
            if (defaultOptions[x] && !this.optionEQvalue(x, defaultOptions[x].value))
                ret[x] = this.options[x].value;
        return ret;
    }

    unknownOptions(): string[] {
        const ret: string[] = [];
        for (const x in this.options)
            if (defaultOptions[x] == null) ret.push(x);
        return ret;
    }

    setOptions(line: string): void {
        line = line.trim();
        if (line.startsWith('#')) line = line.substring(1).trim();
        const eqPos = line.indexOf('=');
        let tmp = line.substring(eqPos + 1).trim();
        if (!tmp.includes('{')) tmp = '{' + line + '}';

        let json = '';
        const src = lexer(tmp, true, true, '');
        for (const t of src) {
            if (t.type === 'identifier' &&
                t.value !== 'true' && t.value !== 'false' && t.value !== 'null')
                json += '"' + t.value + '"';
            else
                json += t.value;
        }
        const settings = JSON.parse(json) as Record<string, unknown>;
        for (const x in settings)
            this.setOptionValue(x.toLowerCase(), settings[x]);
    }

    // ── Semantic helpers ──────────────────────────────────────────────────────

    semantics(): string {
        if (this.optionEQvalue('semantics', 'CHAR')) return ' char';
        if (this.optionEQvalue('semantics', 'BYTE')) return ' byte';
        return '';
    }

    objPrefix(withoutSchema?: string): string {
        let schema = (this.getOptionValue('schema') as string | null) ?? '';
        schema = (schema !== '' && withoutSchema == null) ? schema + '.' : '';
        const prefix = (this.getOptionValue('prefix') as string | null) ?? '';
        const sep    = (prefix !== '' && !prefix.endsWith('_')) ? '_' : '';
        return (schema + prefix + sep).toLowerCase();
    }

    // ── Node lookup ───────────────────────────────────────────────────────────

    find(name: string): any {
        if (this.name2node != null)
            return this.name2node[canonicalObjectName(name) as string] ?? null;

        this.name2node = {};
        for (const root of this.forest) {
            for (const node of (root.descendants() as any[]))
                this.name2node[node.parseName()] = node;
        }
        return this.name2node[canonicalObjectName(name) as string] ?? null;
    }

    descendants(): any[] {
        const ret: any[] = [];
        for (const root of this.forest)
            ret.push(...(root.descendants() as any[]));
        return ret;
    }

    additionalColumns(): Record<string, string> {
        const ret: Record<string, string> = {};
        const input = this.getOptionValue('Auxiliary Columns') as string | null;
        if (input == null) return ret;
        for (const attr of input.split(',')) {
            const trimmed = attr.trim();
            const pos     = trimmed.indexOf(' ');
            if (pos > 0) ret[trimmed.substring(0, pos)] = trimmed.substring(pos + 1).toUpperCase();
            else         ret[trimmed] = 'VARCHAR2(4000)';
        }
        return ret;
    }

    // ── Output generators ─────────────────────────────────────────────────────

    getERD(): ErdOutput {
        if (this._erd != null) return this._erd;

        const gen         = new OracleDDLGenerator(this as any);
        const descendants = this.descendants();
        const output: ErdOutput = { items: [], links: [], groups: {} };

        for (const node of descendants) {
            if (node.inferType() !== 'table') continue;

            const item: ErdItem = {
                name:    this.objPrefix('no schema') + node.parseName(''),
                schema:  (this.getOptionValue('schema') as string) || null,
                columns: [],
            };
            output.items.push(item);

            // PK column
            const idColName = node.getGenIdColName();
            if (idColName != null && !node.isOption('pk')) {
                item.columns.push({ name: idColName, datatype: 'number' });
            } else {
                const pkName = node.getExplicitPkName();
                if (pkName != null && !pkName.includes(',')) {
                    const child = node.findChild(pkName);
                    item.columns.push({ name: pkName, datatype: child?.inferType() ?? 'number' });
                }
            }

            // FK columns
            node.lateInitFks();
            for (const fk in node.fks) {
                const parent: string = node.fks[fk];
                if (fk.includes(',')) {
                    const refNode = this.find(parent);
                    const chunks  = split_str(fk, ', ');
                    for (const col of chunks) {
                        if (col === ',') continue;
                        const pChild = refNode?.findChild(col);
                        item.columns.push({ name: col, datatype: pChild?.inferType() ?? 'number' });
                    }
                    continue;
                }
                const attr    = node.findChild(fk);
                let   type    = attr?.inferType() ?? 'number';
                let   fkName  = fk;
                const refNode = this.find(parent);
                if (refNode != null) {
                    const rname = refNode.getExplicitPkName();
                    if (rname != null && !rname.includes(',')) type = refNode.getPkType();
                } else {
                    const altRef = this.find(fk);
                    if (altRef?.isMany2One?.() && !fk.endsWith('_id'))
                        fkName = (singular(fk) ?? fk) + '_id';
                }
                item.columns.push({ name: fkName, datatype: type });
            }

            // Regular columns
            const explicitPk = node.getExplicitPkName();
            for (const child of node.children) {
                if (child.inferType() === 'table') continue;
                if (child.refId()     != null)     continue;
                if (child.parseName() === explicitPk) continue;
                item.columns.push({ name: child.parseName(''), datatype: child.inferType() });
                if (child.indexOf('file') > 0) {
                    const col = child.parseName();
                    item.columns.push({ name: col + '_filename', datatype: 'varchar2(255' + this.semantics() + ')' });
                    item.columns.push({ name: col + '_mimetype', datatype: 'varchar2(255' + this.semantics() + ')' });
                    item.columns.push({ name: col + '_charset',  datatype: 'varchar2(255' + this.semantics() + ')' });
                    item.columns.push({ name: col + '_lastupd',  datatype: 'date' });
                }
            }

            // Row meta-columns
            const nodeContent = node.trimmedContent().toUpperCase() as string;
            if (this.optionEQvalue('rowkey', true) || nodeContent.includes('/ROWKEY'))
                item.columns.push({ name: 'row_key', datatype: 'varchar2(30' + this.semantics() + ')' });
            if (this.optionEQvalue('rowVersion', 'yes') || nodeContent.includes('/ROWVERSION'))
                item.columns.push({ name: 'row_version', datatype: 'integer' });
            if (this.optionEQvalue('Audit Columns', 'yes') || nodeContent.includes('/AUDITCOLS')) {
                let auditType = (this.getOptionValue('auditdate') as string | null) || '';
                if (!auditType) auditType = this.getOptionValue('Date Data Type') as string;
                auditType = auditType.toLowerCase();
                const char = this.semantics();
                item.columns.push({ name: this.getOptionValue('createdcol')   as string, datatype: auditType });
                item.columns.push({ name: this.getOptionValue('createdbycol') as string, datatype: 'varchar2(255' + char + ')' });
                item.columns.push({ name: this.getOptionValue('updatedcol')   as string, datatype: auditType });
                item.columns.push({ name: this.getOptionValue('updatedbycol') as string, datatype: 'varchar2(255' + char + ')' });
            }
        }

        // Links
        for (const node of descendants) {
            if (node.inferType() !== 'table') continue;
            gen.generateDDL(node);  // populates fks as side-effect
            for (const fk in node.fks) {
                const parent = node.fks[fk];
                const pkNode = this.find(parent);
                if (pkNode == null) continue;
                const pk      = pkNode.getExplicitPkName() ?? 'id';
                const fkAttr  = node.findChild(fk);
                const mandatory = fkAttr == null || fkAttr.isOption('nn') || fkAttr.isOption('notnull');
                output.links.push({
                    source:    this.objPrefix() + parent,
                    source_id: pk,
                    target:    this.objPrefix() + node.parseName(''),
                    target_id: fk,
                    mandatory,
                });
            }
        }

        // Groups
        for (const node of descendants) {
            if (node.inferType() !== 'table') continue;
            const groupName = node.getAnnotationValue('TGROUP') as string | null;
            if (groupName != null) {
                if (!output.groups[groupName]) output.groups[groupName] = [];
                output.groups[groupName].push(this.objPrefix('no schema') + node.parseName(''));
            }
        }

        this._erd = output;
        return output;
    }

    getDDL(): string {
        if (this._ddl != null) return this._ddl;

        const gen         = new OracleDDLGenerator(this as any);
        const descendants = this.descendants();
        let   output      = '';

        // DROP statements
        if (this.optionEQvalue('Include Drops', 'yes'))
            for (const node of descendants) {
                const drop = gen.generateDrop(node) as string;
                if (drop) output += drop;
            }

        // Row-key sequence
        if (this.optionEQvalue('rowkey', true)) {
            output += 'create sequence  row_key_seq;\n\n';
        } else {
            for (const root of this.forest) {
                if ((root.trimmedContent() as string).toUpperCase().includes('/ROWKEY')) {
                    output += 'create sequence  row_key_seq;\n\n';
                    break;
                }
            }
        }

        // Tables
        output += '-- create tables\n\n';
        for (const root of this.forest)
            output += (gen.generateDDL(root) as string) + '\n';
        for (const alter of this.postponedAlters)
            output += alter + '\n';

        // Translation tables
        const hasTransCols = descendants.some(
            (n: any) => n.getTransColumns && n.getTransColumns().length > 0
        );
        if (hasTransCols) {
            const char = this.semantics();
            const p    = this.objPrefix();
            output += '-- translation support\n\n';
            output += `create table ${p}language (\n`;
            output += `    code           varchar2(5${char}) not null\n`;
            output += `                   constraint ${p}language_code_pk primary key,\n`;
            output += `    locale         varchar2(28${char}) not null\n`;
            output += `                   constraint ${p}language_locale_unq unique,\n`;
            output += `    name           varchar2(1024${char}),\n`;
            output += `    native_name    varchar2(1024${char})\n`;
            output += `);\n\n`;
            output += `create index ${p}language_i1 on ${p}language (locale);\n\n`;
            for (const node of descendants) {
                const t = gen.generateTransTable(node) as string;
                if (t) output += t;
            }
        }

        // Triggers
        let j = 0;
        for (const node of descendants) {
            const trigger = gen.generateTrigger(node) as string;
            if (trigger) { if (j++ === 0) output += '-- triggers\n'; output += trigger + '\n'; }
        }
        for (const node of descendants) {
            const trigger = gen.generateImmutableTrigger(node) as string;
            if (trigger) { if (j++ === 0) output += '-- immutable triggers\n'; output += trigger; }
        }

        // ORDS REST enable
        for (const node of descendants) {
            const ords = gen.restEnable(node) as string;
            if (ords) output += ords + '\n';
        }

        // TAPI
        j = 0;
        for (const node of descendants) {
            if (this.optionEQvalue('api', false) &&
                !(node.trimmedContent() as string).toLowerCase().includes('/api'))
                continue;
            const tapi = gen.generateTAPI(node) as string;
            if (tapi) { if (j++ === 0) output += '-- APIs\n'; output += tapi + '\n'; }
        }

        // Views
        j = 0;
        for (const root of this.forest) {
            const view = gen.generateView(root) as string;
            if (view) { if (j++ === 0) output += '-- create views\n'; output += view + '\n'; }
        }
        for (const node of descendants) {
            const rv = gen.generateResolvedView(node) as string;
            if (rv) { if (j++ === 0) output += '-- create views\n'; output += rv; }
        }

        // Table groups (TGROUP annotation)
        const groups: Record<string, string[]> = {};
        for (const node of descendants) {
            if (node.inferType() !== 'table') continue;
            const groupName = node.getAnnotationValue('TGROUP') as string | null;
            if (groupName != null) {
                if (!groups[groupName]) groups[groupName] = [];
                groups[groupName].push(this.objPrefix() + node.parseName());
            }
        }
        const groupNames = Object.keys(groups);
        if (groupNames.length > 0) {
            output += '-- table groups\n';
            for (const gn of groupNames) {
                output += `insert into user_annotations_groups$ (group_name) values ('${gn}');\n`;
                for (const member of groups[gn])
                    output += `insert into user_annotations_group_members$ (group_name, object_name) values ('${gn}', '${member.toUpperCase()}');\n`;
            }
            output += '\n';
        }

        // AI enrichment (db >= 26)
        const enrichDbVer = this.getOptionValue('db') as string | null;
        if (this.optionEQvalue('aienrichment', true) &&
            enrichDbVer != null && enrichDbVer.length >= 2 &&
            (getMajorVersion(enrichDbVer) ?? 0) >= 26) {
            const enrichCalls:  string[] = [];
            const enrichGroups: Record<string, string[]> = {};
            const prefix = this.objPrefix();

            for (const node of this.forest) {
                const type    = node.inferType() as string;
                const pairs   = node.getAnnotationPairs() as Array<{ label: string; value: string | null }>;
                const objName = (prefix + (node.parseName() as string)).toUpperCase();

                if (type === 'table') {
                    for (const pair of pairs) {
                        if (pair.label.toUpperCase() === 'TGROUP') {
                            if (pair.value != null) {
                                if (!enrichGroups[pair.value]) enrichGroups[pair.value] = [];
                                enrichGroups[pair.value].push(objName);
                            }
                            continue;
                        }
                        if (pair.value == null) continue;
                        enrichCalls.push(`    metadata_annotations.set('${pair.label}', '${pair.value}', '${objName}');`);
                    }
                    for (const col of node.children as any[]) {
                        if (col.children.length > 0) continue;
                        const colPairs  = col.getAnnotationPairs() as Array<{ label: string; value: string | null }>;
                        const colName   = objName + '.' + (col.parseName() as string).toUpperCase();
                        for (const pair of colPairs) {
                            if (pair.value == null) continue;
                            enrichCalls.push(`    metadata_annotations.set('${pair.label}', '${pair.value}', '${colName}', 'TABLE COLUMN');`);
                        }
                    }
                } else if (type === 'view') {
                    for (const pair of pairs) {
                        if (pair.value == null) continue;
                        enrichCalls.push(`    metadata_annotations.set('${pair.label}', '${pair.value}', '${objName}', 'VIEW');`);
                    }
                }
            }

            for (const gn of Object.keys(enrichGroups)) {
                enrichCalls.push(`    metadata_annotations.create_group('${gn}');`);
                for (const member of enrichGroups[gn])
                    enrichCalls.push(`    metadata_annotations.add_to_group('${gn}', '${member}', 'TABLE');`);
            }

            if (enrichCalls.length > 0)
                output += '-- AI enrichment\nbegin\n' + enrichCalls.join('\n') + '\nend;\n/\n\n';
        }

        // Sample data
        j = 0;
        for (const root of this.forest) {
            const data = gen.generateData(root, this.data) as string;
            if (data) { if (j++ === 0) output += '-- load data\n\n'; output += data + '\n'; }
        }

        // Footer
        const inputWithoutComments = (fullInput: string) => fullInput
            .replace(/#.+/g, '\n')
            .replace(/\/\*/g, '--<--')
            .replace(/\*\//g, '-->--');

        output += `-- Generated by Quick SQL ${this.version()} ${new Date().toLocaleString()}\n\n`;
        output += '/*\n';
        output += inputWithoutComments(this.input);
        output += '\n';
        for (const u of this.unknownOptions())
            output += '*** Unknown setting: ' + u + '\n';
        output += '\n Non-default options:\n# settings = ' + JSON.stringify(this.nonDefaultOptions()) + '\n';
        output += '\n*/';

        this._ddl = output;
        return output;
    }

    getErrors(): unknown[] {
        if (this._errors != null) return this._errors;
        this._errors = errorMsgs.findErrors(this, this.input) as unknown[];
        return this._errors;
    }

    version(): string {
        return qsql_version();
    }

    // ── Static back-compat assignments (for quickSQL.toDDL() calling convention) ──
    declare static toDDL:    typeof toDDL;
    declare static toERD:    typeof toERD;
    declare static toErrors: typeof toErrors;
    declare static fromJSON: typeof fromJSON;
    declare static version:  typeof qsql_version;
    declare static lexer:    typeof lexer;
}

// ── Module-level API functions ────────────────────────────────────────────────

export function fromJSON(input: unknown, name?: string): string {
    return json2qsql(input, name) as string;
}

export function toERD(input: string, options?: unknown): ErdOutput {
    return new quicksql(input, options).getERD();
}

export function toDDL(input: string, options?: unknown): string {
    return new quicksql(input, options).getDDL();
}

export function toErrors(input: string, options?: unknown): unknown[] {
    return new quicksql(input, options).getErrors();
}

export function qsql_version(): string {
    return typeof __PACKAGE_VERSION__ === 'undefined' ? 'development' : __PACKAGE_VERSION__;
}

// Assign to static slots for backward-compat (quicksql.toDDL etc.)
quicksql.toDDL    = toDDL;
quicksql.toERD    = toERD;
quicksql.toErrors = toErrors;
quicksql.fromJSON = fromJSON;
quicksql.version  = qsql_version;
quicksql.lexer    = lexer;

export default quicksql;
