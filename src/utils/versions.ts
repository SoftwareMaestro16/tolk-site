export const tolkVersions = [
    {
      version: "v0.13",
      changes: [
        "Auto-packing to/from cells/builders/slices",
        "Type address",
        "Lateinit variables",
        "Defaults for parameters",
      ],
    },
    {
      version: "v0.12",
      changes: [
        "Structures struct A { ... }",
        "Generics struct<T> and type<T>",
        "Methods fun Point.getX(self)",
        "Rename stdlib functions to short methods",
      ],
    },
    {
      version: "v0.11",
      changes: [
        "Type aliases type NewName = <existing type>",
        "Union types T1 | T2 | ...",
        "Pattern matching for types",
        "Operators is and !is",
        "Pattern matching for expressions",
        "Semicolon for the last statement in a block can be omitted",
      ],
    },
    {
      version: "v0.10",
      changes: [
        "Fixed-width integers: int32, uint64, etc.",
        "Type coins and function ton('0.05')",
        "bytesN and bitsN types (backed by slices at TVM level)",
        "Replace '...c' postfixes with stringCrc32('...') functions",
        "Support 0b... number literals along with 0x...",
        "Trailing comma support",
      ],
    },
    {
      version: "v0.9",
      changes: [
        "Nullable types int?, cell?, etc.; null safety",
        "Standard library (asm definitions) updated to reflect nullability",
        "Smart casts, like in TypeScript and Kotlin",
        "Operator ! (non-null assertion)",
        "Code after throw is treated as unreachable",
        "The never type",
      ],
    },
    {
      version: "v0.8",
      changes: [
        "Syntax tensorVar.0 and tupleVar.0 (both for reading and writing)",
        "Allow cell, slice, etc. to be valid identifiers (not keywords)",
      ],
    },
    {
      version: "v0.7",
      changes: [
        "Under the hood: refactor compiler internals; AST-level semantic analysis kernel",
        "Under the hood: rewrite the type system from Hindley-Milner to static typing",
        "Clear and readable error messages on type mismatch",
        "Generic functions fun f<T>(...) and instantiations like f<int>(...)",
        "The bool type; type casting via value as T",
      ],
    },
    {
      version: "v0.6",
      changes: [
        "The first public release",
        "Base syntax similar to TypeScript",
        "Compatibility with FunC low-level optimizations",
        "Standard library (stdlib) support",
        "IDE integration (VS Code, JetBrains)",
      ],
    },
  ];