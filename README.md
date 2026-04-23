This is a technical summary of the **QuickSQL TypeScript Refactoring**, designed for developers who wish to maintain or extend the engine.

QuickSQL TypeScript Architecture Overview
=========================================

The project has been refactored from a monolithic JavaScript structure into a **decoupled, type-safe architecture** following a "Compiler Frontend" pattern. The system translates Shorthand Syntax (QSQL) into relational DDL or ERD metadata.

### Core Architectural Pattern: **Decoupled Transformation Pipeline**

The engine operates in four distinct stages:

1.  **Lexical Analysis**: Raw string to a flat token stream.
    
2.  **Syntactic Recognition**: Token stream to a hierarchical Forest/Tree.
    
3.  **Semantic Analysis**: Nodes self-infer types and relationships.
    
4.  **Generation**: DDL Generators (Visitors) traverse the tree to produce output.
    

1\. Core Modules & Responsibilities
-----------------------------------

### lexer.ts (The Tokenizer)

*   **Purpose**: Scans the input string and produces LexerToken objects.
    
*   **Key Feature**: It pre-calculates lowerValue for every token to avoid expensive .toLowerCase() calls during tree traversal.
    
*   **Extensibility**: If adding new operators (e.g., specific Oracle 23c symbols), modify the TokenType union and the lexer function loop.
    

### parser.ts (The Tree Builder)

*   **Function**: recognize(ctx: DdlContext)
    
*   **Logic**: Implements an indentation-aware parser. It merges multi-line annotation blocks (detecting unclosed {...}) and builds the parent-child hierarchy based on LexerToken offsets.
    
*   **How to extend**: To support new top-level directives (like #settings), update the OUTER loop logic.
    

### node.ts (The Semantic Brain)

*   **Class**: DdlNode implements IDdlNode.
    
*   **Key Functions**:
    
    *   inferType(): Centralized logic for mapping shorthand (e.g., vc50) to abstract semantic types.
        
    *   parseName(): Handles identifier extraction, quoted strings, and shorthand-to-object name mapping.
        
    *   isOption(key): Helper to check for directives (e.g., /insert, /nn).
        
*   **Developer Note**: This is the most important file for adding new column-level features.
    

### generator.ts (The SQL Writer)

*   **Pattern**: **Strategy/Factory**.
    
*   **Classes**: OracleDDLGenerator implements DDLGenerator.
    
*   **Responsibility**: Traverses the tree to generate CREATE TABLE, ALTER TABLE, and specialized Oracle 23c **JSON Duality Views**.
    
*   **Extensibility**: To support another dialect (e.g., PostgreSQL), create a new class implementing DDLGenerator and register it in createGenerator().
    

2\. Key Type Definitions (types.ts)
-----------------------------------

The system relies on strict interfaces to keep modules decoupled:

*   **IDdlNode**: Defines the contract for any object in the tree. Allows the generator to interact with nodes without knowing the internal parsing logic.
    
*   **SemanticType**: A database-agnostic description of a column (base type, length, precision). Generators map this to specific SQL types.
    
*   **DdlContext**: A shared state object holding global settings, the forest of nodes, and error trackers.
    

3\. Supporting Utilities
------------------------

*   **naming.ts**: Contains logic for singular()/plural() transformations and Oracle identifier quoting rules. Essential for maintaining naming consistency.
    
*   **errorMsgs.ts**: Performs post-parsing validation (e.g., checking for misaligned indents or invalid attribute combinations).
    
*   **json2qsql.ts**: An experimental utility to reverse-engineer a JSON document into QSQL shorthand.
    

4\. How to Extend the Engine
----------------------------

### Adding a new Column Directive (e.g., /encrypted)

1.  **Update types.ts**: Add a property to the IDdlNode interface if necessary.
    
2.  **Update node.ts**: Add logic to detect the new token in the src array.
    
3.  **Update generator.ts**: Modify generateTable (or similar) to check for child.isOption('encrypted') and append the appropriate SQL clause.
    

### Adding a new Database Dialect

1.  Create src/generators/postgres.ts.
    
2.  Implement the DDLGenerator interface.
    
3.  Update createGenerator in generator.ts to switch between dialects based on a context option.
    

### Troubleshooting the Parser

If a specific line is parsed incorrectly, inspect the src property of the DdlNode. This array contains the exact LexerToken stream used to build that specific node.

### Technical Summary for LLM-Aided Coding

> "This project is a TypeScript refactoring of QuickSQL. It uses a **Recursive Descent Parser** logic in parser.ts to build a tree of DdlNode objects. Generation is handled by a **Visitor-like Generator** in generator.ts. All types are centralized in types.ts. The system supports Oracle-specific features like JSON Duality Views and utilizes a custom Lexer for performance."
