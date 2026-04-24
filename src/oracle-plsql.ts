import { getMajorVersion } from './naming.js';
import { tab } from './node.js';
import type { Naming } from './node.js';
import type { DdlContext, IDdlNode } from './types.js';

// ── Module-level helpers ───────────────────────────────────────────────────────

function caseMethod(node: IDdlNode): string {
    if (node.isOption('lower')) return 'lower';
    if (node.isOption('upper')) return 'upper';
    return '';
}

function fkPlsqlType(refNode: IDdlNode): string | null {
    const pkName = refNode.getExplicitPkName();
    if (pkName == null || pkName.includes(',')) return null;
    const pkChild = refNode.findChild(pkName);
    return pkChild != null ? pkChild.getPlsqlType() : refNode.getPkType();
}

/**
 * Handles Oracle REST enable, trigger generation, and Table API (TAPI)
 * for OracleDDLGenerator.
 */
export class OraclePlsqlBuilder {
    constructor(
        private ctx:    DdlContext,
        private naming: Naming,
    ) {}

    // ── ORDS ──────────────────────────────────────────────────────────────────

    restEnable(node: IDdlNode): string {
        if (node.inferType() !== 'table') return '';
        if (!node.isOption('rest')) return '';
        const name     = node.parseName();
        const isQuoted = name.indexOf('"') === 0;
        let objName = this.ctx.objPrefix() + name;
        if (isQuoted) objName = this.ctx.objPrefix() + name.substring(1, name.length - 1);
        else objName = (this.ctx.objPrefix() + name).toUpperCase();
        return "begin\n" + tab + "ords.enable_object(p_enabled=>TRUE, p_object=>'" + objName + "');\nend;\n/\n";
    }

    // ── Triggers ──────────────────────────────────────────────────────────────

    generateTrigger(node: IDdlNode): string {
        if (node.inferType() !== 'table') return '';
        if (node.isOption('soda')) return '';
        return this._generateBITrigger(node) + this._generateBUTrigger(node);
    }

    private _generateBITrigger(node: IDdlNode): string {
        const editionable = this.ctx.optionEQvalue('editionable', 'yes') ? ' editionable' : '';
        const objName     = (this.ctx.objPrefix() + node.parseName()).toLowerCase();
        let ret = `create or replace${editionable} trigger ${objName}${this.naming.bi}\n`;
        ret += '    before insert\n';
        ret += '    on ' + objName + '\n';
        ret += '    for each row\n';

        if (node.hasRowKey()) {
            ret += `declare
    function compress_int (n in integer ) return varchar2
    as
        ret       varchar2(30);
        quotient  integer;
        remainder integer;
        digit     char(1);
    begin
        ret := null; quotient := n;
        <<compress_loop>>
        while quotient > 0
        loop
            remainder := mod(quotient, 10 + 26);
            quotient := floor(quotient  / (10 + 26));
            if remainder < 26 then
                digit := chr(ascii('A') + remainder);
            else
                digit := chr(ascii('0') + remainder - 26);
            end if;
            ret := digit || ret;
        end loop compress_loop;
        if length(ret) < 5 then ret := lpad(ret, 4, 'A'); end if ;
        return upper(ret);
    end compress_int;
`;
        }

        ret += 'begin\n';
        let OK  = false;
        const user = node.apexUser();
        if (node.hasRowKey()) { ret += '    :new.row_key := compress_int(row_key_seq.nextval);\n'; OK = true; }
        for (const child of node.children) {
            const method = caseMethod(child);
            if (method === '') continue;
            ret += '    :new.' + child.parseName().toLowerCase() + ' := ' + method + '(:new.' + child.parseName().toLowerCase() + ');\n';
            OK = true;
        }
        if (node.hasRowVersion()) { ret += '    :new.row_version := 1;\n'; OK = true; }
        if (node.hasAuditCols()) {
            const sysDateFn = node.auditSysDateFn();
            ret += '    :new.' + this.ctx.getOptionValue('createdcol')   + ' := ' + sysDateFn + ';\n';
            ret += '    :new.' + this.ctx.getOptionValue('createdbycol') + ' := ' + user + ';\n';
            ret += '    :new.' + this.ctx.getOptionValue('updatedcol')   + ' := ' + sysDateFn + ';\n';
            ret += '    :new.' + this.ctx.getOptionValue('updatedbycol') + ' := ' + user + ';\n';
            OK = true;
        }
        const cols = this.ctx.additionalColumns();
        for (const col in cols) {
            const type = cols[col];
            ret += '    if :new.' + col + ' is null then\n';
            if (type.startsWith('INT')) ret += '        ' + col + ' := 0;\n';
            else ret += "        " + col + " := 'N/A';\n";
            ret += '    end if;\n';
            OK = true;
        }
        if (!OK) return '';
        ret += 'end ' + objName + this.naming.bi + ';\n/\n\n';
        return ret;
    }

    private _generateBUTrigger(node: IDdlNode): string {
        if (node.isOption('immutable')) return '';
        let hasLowerUpper = false;
        for (const child of node.children) {
            if (child.isOption('lower') || child.isOption('upper')) { hasLowerUpper = true; break; }
        }
        const hasRowVersion = node.hasRowVersion();
        const hasAuditCols  = node.hasAuditCols();
        if (!hasLowerUpper && !hasRowVersion && !hasAuditCols) return '';
        const editionable = this.ctx.optionEQvalue('editionable', 'yes') ? ' editionable' : '';
        const objName     = (this.ctx.objPrefix() + node.parseName()).toLowerCase();
        let ret = `create or replace${editionable} trigger ${objName}${this.naming.bu}\n`;
        ret += '    before update\n    on ' + objName + '\n    for each row\nbegin\n';
        const user = node.apexUser();
        for (const child of node.children) {
            const method = caseMethod(child);
            if (method === '') continue;
            ret += '    :new.' + child.parseName().toLowerCase() + ' := ' + method + '(:new.' + child.parseName().toLowerCase() + ');\n';
        }
        if (hasRowVersion) ret += '    :new.row_version := nvl(:old.row_version, 0) + 1;\n';
        if (hasAuditCols) {
            const sysDateFn = node.auditSysDateFn();
            ret += '    :new.' + this.ctx.getOptionValue('updatedcol')   + ' := ' + sysDateFn + ';\n';
            ret += '    :new.' + this.ctx.getOptionValue('updatedbycol') + ' := ' + user + ';\n';
        }
        ret += 'end ' + objName + this.naming.bu + ';\n/\n\n';
        return ret;
    }

    generateImmutableTrigger(node: IDdlNode): string {
        if (node.inferType() !== 'table') return '';
        if (!node.isOption('immutable')) return '';
        const dbVer = this.ctx.getOptionValue('db') as string | null;
        if (dbVer && dbVer.length > 0 && 23 <= (getMajorVersion(dbVer) ?? 0)) return '';
        const objName = this.ctx.objPrefix() + node.parseName();
        let ret = 'create or replace trigger ' + this.naming.immutable_prefix + objName.toLowerCase() + this.naming.immutable_suffix + '\n';
        ret += '    before update or delete\n    on ' + objName.toLowerCase() + '\ndeclare\n';
        ret += "    co_immutable_err  constant pls_integer      := -20055;\n";
        ret += "    co_immutable_msg  constant varchar2(200 char) := '" + objName.toLowerCase() + " is immutable';\n";
        ret += 'begin\n    raise_application_error(co_immutable_err, co_immutable_msg);\nend;\n/\n\n';
        return ret;
    }

    // ── Table API (TAPI) ──────────────────────────────────────────────────────

    procDecl(node: IDdlNode, kind: string): string {
        const modifier = kind !== 'get' ? ' default null' : '';
        const mode     = kind !== 'get' ? ' in' : 'out';
        let ret = tab + 'procedure ' + kind + '_row (\n';
        const idColName   = node.getPkName();
        const pkChild     = node.getGenIdColName() !== null ? null : node.findChild(node.getExplicitPkName()!);
        const pkPlsqlType = pkChild ? pkChild.getPlsqlType() : node.getPkType();
        ret += tab + tab + 'p_' + idColName + '        in  ' + pkPlsqlType + modifier;
        for (const fk in (node.fks ?? {})) {
            const parent  = node.fks![fk];
            let type = 'integer';
            const refNode = this.ctx.find(parent);
            if (refNode !== null) type = fkPlsqlType(refNode) ?? type;
            ret += ',\n' + tab + tab + 'P_' + fk + '   ' + mode + '  ' + type + modifier;
        }
        for (const child of node.regularColumns())
            ret += ',\n' + tab + tab + 'P_' + child.parseName() + '   ' + mode + '  ' + child.getPlsqlType() + modifier;
        ret += '\n    )';
        return ret;
    }

    private _getRowBody(node: IDdlNode): string {
        const idColName = node.getPkName();
        const objName   = this.ctx.objPrefix() + node.parseName();
        let ret = tab + 'is \n' + tab + 'begin \n';
        const selectCols: string[] = [];
        const intoCols:   string[] = [];
        for (const fk in (node.fks ?? {})) { selectCols.push(fk); intoCols.push('p_' + fk); }
        for (const child of node.regularColumns()) {
            const cn = child.parseName().toLowerCase();
            selectCols.push(cn); intoCols.push('p_' + cn);
        }
        if (selectCols.length > 0) {
            const pad = tab + tab + '       ';
            ret += tab + tab + 'select ' + selectCols.join(',\n' + pad) + '\n';
            ret += tab + tab + '  into ' + intoCols.join(',\n' + pad) + '\n';
            ret += tab + tab + '  from ' + objName + '\n';
            ret += tab + tab + ' where ' + idColName + ' = p_' + idColName + ';\n';
        }
        ret += tab + 'exception\n' + tab + tab + 'when no_data_found then\n' + tab + tab + tab + 'null;\n';
        ret += tab + 'end get_row;\n \n';
        return ret;
    }

    private _insertRowBody(node: IDdlNode): string {
        const idColName = node.getPkName();
        const objName   = this.ctx.objPrefix() + node.parseName();
        let ret = tab + 'is \n' + tab + 'begin \n';
        ret += tab + tab + 'insert into ' + objName + ' ( \n' + tab + tab + tab + idColName;
        for (const fk in (node.fks ?? {})) ret += ',\n' + tab + tab + tab + fk;
        for (const child of node.regularColumns()) ret += ',\n' + tab + tab + tab + child.parseName().toLowerCase();
        ret += '\n' + tab + tab + ') values ( \n' + tab + tab + tab + 'p_' + idColName;
        for (const fk in (node.fks ?? {})) ret += ',\n' + tab + tab + tab + 'p_' + fk;
        for (const child of node.regularColumns()) ret += ',\n' + tab + tab + tab + 'p_' + child.parseName();
        ret += '\n' + tab + tab + ');';
        ret += '\n' + tab + 'end insert_row;\n \n \n';
        return ret;
    }

    private _updateRowBody(node: IDdlNode): string {
        const idColName = node.getPkName();
        const objName   = this.ctx.objPrefix() + node.parseName();
        let ret = tab + 'is \n' + tab + 'begin \n';
        ret += tab + tab + 'update  ' + objName + ' set \n' + tab + tab + tab + idColName + ' = p_' + idColName;
        for (const fk in (node.fks ?? {})) ret += ',\n' + tab + tab + tab + fk + ' = P_' + fk;
        for (const child of node.regularColumns())
            ret += ',\n' + tab + tab + tab + child.parseName().toLowerCase() + ' = P_' + child.parseName().toLowerCase();
        ret += '\n' + tab + tab + 'where ' + idColName + ' = p_' + idColName + ';';
        ret += '\n' + tab + 'end update_row;\n \n \n';
        return ret;
    }

    generateTAPI(node: IDdlNode): string {
        if (node.children.length === 0) return '';
        const objName   = this.ctx.objPrefix() + node.parseName();
        let ret = ('create or replace package ' + objName.toLowerCase() + '_API\nis\n\n').toLowerCase();
        ret += this.procDecl(node, 'get') + ';\n\n';
        ret += this.procDecl(node, 'insert') + ';\n\n';
        ret += this.procDecl(node, 'update') + ';\n\n';
        const idColName = node.getPkName();
        ret += '    procedure delete_row (\n        p_' + idColName + '              in integer\n    );\n'
             + 'end ' + objName.toLowerCase() + '_api;\n/\n\n';
        ret += ('create or replace package body ' + objName.toLowerCase() + '_API\nis\n\n').toLowerCase();
        ret += this.procDecl(node, 'get')    + '\n' + this._getRowBody(node);
        ret += this.procDecl(node, 'insert') + '\n' + this._insertRowBody(node);
        ret += this.procDecl(node, 'update') + '\n' + this._updateRowBody(node);
        ret += '    procedure delete_row (\n        p_' + idColName + '              in integer\n    )\n'
             + '    is\n    begin\n        delete from ' + objName.toLowerCase() + ' where ' + idColName + ' = p_' + idColName + ';\n'
             + '    end delete_row;\n'
             + 'end ' + objName.toLowerCase() + '_api;\n/\n';
        return ret.toLowerCase();
    }
}
