// Re-export barrel — keeps backward-compat for existing importers.
export { default } from './parser.js';
export { OracleDDLGenerator } from './generator.js';
export { BaseGenerator } from './base-generator.js';
export { OracleViewBuilder } from './oracle-view.js';
export { OraclePlsqlBuilder } from './oracle-plsql.js';
export { toOracleType, oraclePkTypeModifier, isDb23 } from './oracle-types.js';
export { createGenerator, registerGenerator } from './factory.js';
export type { GeneratorFactory } from './factory.js';
export { DdlNode } from './node.js';
