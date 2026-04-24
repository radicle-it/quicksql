import type { DdlContext, DDLGenerator } from './types.js';
import { OracleDDLGenerator } from './generator.js';

/** A function that constructs a DDLGenerator for a given context. */
export type GeneratorFactory = (ctx: DdlContext) => DDLGenerator;

const registry: Record<string, GeneratorFactory> = {
    oracle: ctx => new OracleDDLGenerator(ctx),
};

/**
 * Register a DDL generator factory for a SQL dialect.
 * Call this once at startup before any toDDL() / toERD() calls.
 *
 * @example
 * import { registerGenerator } from 'quicksql';
 * registerGenerator('postgres', ctx => new PostgreSQLGenerator(ctx));
 */
export function registerGenerator(dialect: string, factory: GeneratorFactory): void {
    registry[dialect.toLowerCase()] = factory;
}

/**
 * Return the DDLGenerator registered for the 'dialect' option in ctx.
 * Defaults to 'oracle' when the option is absent.
 * Throws if the requested dialect has no registered factory.
 */
export function createGenerator(ctx: DdlContext): DDLGenerator {
    const dialect = String(ctx.getOptionValue('dialect') ?? 'oracle').toLowerCase();
    const factory = registry[dialect];
    if (factory == null) {
        const available = Object.keys(registry).join(', ');
        throw new Error(`Unknown SQL dialect: "${dialect}". Registered dialects: ${available}`);
    }
    return factory(ctx);
}
