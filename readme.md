# Rolster Typescript Types

Package containing the basic definitions for handling data types.

## Installation

```
npm i @rolster/typescript-types
```

## Configuration

The package path must be added in the `files` property in the `tsconfig.json` file

```json
{
  "files": ["node_modules/@xofttion/types/index.d.ts"]
}
```

## Types

| Interfaces     | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| `Undefined<T>` | Interface that allows to type a generic data with undefined value. |
| `Nulleable<T>` | Interface that allows to type a generic data with nulleable value. |
| `Unknown<T>`   | Interface that allows to type a generic data with unknown value.   | 

## Implementation

```ts
// Variable can contain an string|undefined value
const value1: Undefined<string> = 'string' || undefined;

// Variable can contain an boolean|null value
const value2: Nulleable<boolean> = false || null;

// Variable can contain an number|unknown value
const value3: Unknown<number> = 1044 || unknown;
```

## Contributors

- :rocket: Daniel Andrés Castillo Pedroza
