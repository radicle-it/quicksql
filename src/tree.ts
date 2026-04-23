// Re-export barrel — keeps backward-compat for existing importers.
export { default } from './parser.js';
export { OracleDDLGenerator, createGenerator } from './generator.js';
export { DdlNode } from './node.js';
