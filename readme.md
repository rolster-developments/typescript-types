# Rolster Types

Package containing the basic definitions for handling data types.

## Installation

```
npm i @rolster/types
```

## Configuration

The package path must be added in the `files` property in the `tsconfig.json` file

```json
{
  "files": ["node_modules/@rolster/types/index.d.ts"]
}
```

The package only ships ambient (global) type declarations: once loaded through
`files`, every type below is available everywhere without imports. It has no
runtime code and its `package.json` exposes only a `types` export, so
`import '@rolster/types'` fails at runtime and must not be used.

## Types

| Name                                                     | Description                                                                                            |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Undefined<T>`                                           | `T \| undefined`.                                                                                      |
| `Nulleable<T>`                                           | `T \| null`.                                                                                           |
| `Unknown<T>`                                             | `T \| unknown`, which TypeScript collapses to `unknown`; the generic only documents the intended type. |
| `NonUndefined<T>`                                        | Excludes `undefined` from `T`.                                                                         |
| `Any<T extends object>`                                  | `string \| number \| symbol \| boolean \| T` — a primitive or the given object type.                   |
| `UndefinedObject<T>`                                     | Every property of `T` may also be `undefined`.                                                         |
| `NullableObject<T>`                                      | Every property of `T` may also be `null`.                                                              |
| `UnknownObject<T>`                                       | Every property of `T` becomes `unknown` (see `Unknown<T>`).                                            |
| `LiteralObject<T = any, K = string \| number \| symbol>` | `Record<K, T>` — a plain key/value object.                                                             |
| `Unsubscription`                                         | `() => void` — function returned by subscriptions to detach them.                                      |
| `OneOrMany<T>`                                           | `T \| T[]`.                                                                                            |
| `ValueOrFunction<T>`                                     | `T \| (() => T)` — a value or a factory that produces it.                                              |
| `KeysOmit<T, V>`                                         | Keys of `T` whose value type is not assignable to `V`.                                                 |
| `KeysOmitFunction<T>`                                    | Keys of `T` that are not functions (`KeysOmit<T, (...args: any[]) => any>`).                           |

## Implementation

```ts
// Variable can contain an string|undefined value
let value1: Undefined<string> = 'string';
value1 = undefined;

// Variable can contain an boolean|null value
let value2: Nulleable<boolean> = false;
value2 = null;

// Unknown<number> is equivalent to unknown: any value is accepted
const value3: Unknown<number> = 1044;

interface User {
  id: number;
  name: string;
  greet(): void;
}

// Every property may be null
const draft: NullableObject<User> = { id: null, name: 'Daniel', greet: null };

// A single value or an array of them
const ids: OneOrMany<number> = [1, 2, 3];

// A value or a factory producing it
const lazyName: ValueOrFunction<string> = () => 'Daniel';

// 'id' | 'name' (methods are excluded)
const field: KeysOmitFunction<User> = 'name';

const off: Unsubscription = () => {};
```

## Contributing

- Daniel Andrés Castillo Pedroza :rocket:
