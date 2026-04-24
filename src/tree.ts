// Re-export barrel — keeps backward-compat for existing importers.
export { default } from './parser.js';
export { OracleDDLGenerator } from './generator.js';
export { createGenerator, registerGenerator } from './factory.js';
export type { GeneratorFactory } from './factory.js';
export { DdlNode } from './node.js';
