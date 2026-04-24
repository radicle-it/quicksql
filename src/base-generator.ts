import { singular } from './naming.js';
import split_str from './split_str.js';
import type { DdlContext, DDLGenerator, IDdlNode, SemanticType, ErdColumn, ErdItem, ErdLink, ErdOutput } from './types.js';

/**
 * Abstract base for all DDL generators.
 *
 * Subclasses must implement:
 *   - colType(sem)       — render a SemanticType to a dialect column-type string
 *   - generateDDL(node)  — emit DDL for one top-level node
 *   - generateDrop(node) — emit DROP statement(s) for one node
 *   - generateFullDDL()  — orchestrate the full script
 *
 * generateERD() is provided here and is dialect-agnostic; it delegates
 * all type-string decisions to colType().
 */
export abstract class BaseGenerator implements DDLGenerator {
    protected _ddl: DdlContext;

    constructor(ctx: DdlContext) {
        this._ddl = ctx;
    }

    // ── Dialect hooks ─────────────────────────────────────────────────────────

    /** Map a SemanticType to a dialect-specific column type string. */
    abstract colType(sem: SemanticType): string;

    // ── Contract (implemented by dialect subclass) ────────────────────────────

    abstract generateDDL(node: IDdlNode): string;
    abstract generateDrop(node: IDdlNode): string;
    abstract generateFullDDL(): string;

    // ── Shared helpers ────────────────────────────────────────────────────────

    /**
     * Resolve the dialect column type for a FK column by inspecting the
     * referenced table's explicit PK. Returns null for auto-generated PKs
     * so the caller can fall back to the FK column's own convention type.
     */
    protected _fkColType(refNode: IDdlNode): string | null {
        const pkName = refNode.getExplicitPkName();
        if (pkName == null || pkName.includes(',')) return null;
        const pkChild = refNode.findChild(pkName);
        return pkChild != null ? this.colType(pkChild._inferTypeFull()) : refNode.getPkType();
    }

    // ── Shared: ERD generation ────────────────────────────────────────────────

    generateERD(): ErdOutput {
        const descendants = this._ddl.descendants();
        const output: ErdOutput = { items: [], links: [] };

        for (const node of descendants) {
            if (node.inferType() !== 'table') continue;

            const item: ErdItem = {
                name:    this._ddl.objPrefix('no schema') + node.parseName(),
                schema:  (this._ddl.getOptionValue('schema') as string) || null,
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
                    item.columns.push({ name: pkName, datatype: child ? this.colType(child._inferTypeFull()) : 'number' });
                }
            }

            // FK columns
            node.lateInitFks();
            for (const fk in (node.fks ?? {})) {
                const parent: string = node.fks![fk];
                if (fk.includes(',')) {
                    const refNode = this._ddl.find(parent);
                    for (const col of split_str(fk, ', ')) {
                        if (col === ',') continue;
                        const pChild = refNode?.findChild(col);
                        item.columns.push({ name: col, datatype: pChild ? this.colType(pChild._inferTypeFull()) : 'number' } as ErdColumn);
                    }
                    continue;
                }
                const attr    = node.findChild(fk);
                let   type    = attr ? attr.inferType() : 'number';
                let   fkName  = fk;
                const refNode = this._ddl.find(parent);
                if (refNode != null) {
                    type = this._fkColType(refNode) ?? type;
                } else {
                    const altRef = this._ddl.find(fk);
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
                item.columns.push({ name: child.parseName(), datatype: this.colType(child._inferTypeFull()) });
                if (child.indexOf('file') > 0) {
                    const col   = child.parseName();
                    const vc255: SemanticType = { base: 'varchar', varcharLen: 255, colName: col, needsBoolCheck: false, isNativeBoolean: false, parent_child: '' };
                    const dtSem: SemanticType = { base: 'date',    colName: col, needsBoolCheck: false, isNativeBoolean: false, parent_child: '' };
                    item.columns.push({ name: col + '_filename', datatype: this.colType(vc255) });
                    item.columns.push({ name: col + '_mimetype', datatype: this.colType(vc255) });
                    item.columns.push({ name: col + '_charset',  datatype: this.colType(vc255) });
                    item.columns.push({ name: col + '_lastupd',  datatype: this.colType(dtSem) });
                }
            }

            // Row meta-columns
            const nodeContent = node.trimmedContent().toUpperCase();
            if (this._ddl.optionEQvalue('rowkey', true) || nodeContent.includes('/ROWKEY')) {
                const vc30: SemanticType = { base: 'varchar', varcharLen: 30, colName: 'row_key', needsBoolCheck: false, isNativeBoolean: false, parent_child: '' };
                item.columns.push({ name: 'row_key', datatype: this.colType(vc30) });
            }
            if (this._ddl.optionEQvalue('rowVersion', 'yes') || nodeContent.includes('/ROWVERSION'))
                item.columns.push({ name: 'row_version', datatype: 'integer' });
            if (this._ddl.optionEQvalue('Audit Columns', 'yes') || nodeContent.includes('/AUDITCOLS')) {
                let auditBase = (this._ddl.getOptionValue('auditdate') as string | null) || '';
                if (!auditBase) auditBase = this._ddl.getOptionValue('Date Data Type') as string ?? 'date';
                const auditSem: SemanticType = { base: auditBase.toLowerCase(), colName: '', needsBoolCheck: false, isNativeBoolean: false, parent_child: '' };
                const vc255:    SemanticType = { base: 'varchar', varcharLen: 255, colName: '', needsBoolCheck: false, isNativeBoolean: false, parent_child: '' };
                item.columns.push({ name: this._ddl.getOptionValue('createdcol')   as string, datatype: this.colType(auditSem) });
                item.columns.push({ name: this._ddl.getOptionValue('createdbycol') as string, datatype: this.colType(vc255) });
                item.columns.push({ name: this._ddl.getOptionValue('updatedcol')   as string, datatype: this.colType(auditSem) });
                item.columns.push({ name: this._ddl.getOptionValue('updatedbycol') as string, datatype: this.colType(vc255) });
            }
        }

        // Links
        for (const node of descendants) {
            if (node.inferType() !== 'table') continue;
            this.generateDDL(node);  // populates node.fks as side-effect
            for (const fk in (node.fks ?? {})) {
                const parent  = node.fks![fk];
                const pkNode  = this._ddl.find(parent);
                if (pkNode == null) continue;
                const pk        = pkNode.getExplicitPkName() ?? 'id';
                const fkAttr    = node.findChild(fk);
                const mandatory = fkAttr == null || fkAttr.isOption('nn') || fkAttr.isOption('notnull');
                const link: ErdLink = {
                    source:    this._ddl.objPrefix() + parent,
                    source_id: pk,
                    target:    this._ddl.objPrefix() + node.parseName(),
                    target_id: fk,
                };
                if (mandatory) link.mandatory = mandatory;
                output.links.push(link);
            }
        }

        // Groups
        const groups: Record<string, string[]> = {};
        for (const node of descendants) {
            if (node.inferType() !== 'table') continue;
            const groupName = node.getAnnotationValue('TGROUP');
            if (groupName != null) {
                if (!groups[groupName]) groups[groupName] = [];
                groups[groupName].push(this._ddl.objPrefix('no schema') + node.parseName());
            }
        }
        if (Object.keys(groups).length > 0) output.groups = groups;

        return output;
    }
}
