declare global {
  type Undefined<T> = T | undefined;

  type Nulleable<T> = T | null;

  type Nullish<T> = T | null | undefined;

  type Unknown<T> = T | unknown;

  type NonUndefined<T> = T extends undefined ? never : T;

  type Any<T extends object> = string | number | symbol | boolean | T;

  type UndefinedObject<T> = {
    [K in keyof T]: Undefined<T[K]>;
  };

  type NullableObject<T> = {
    [K in keyof T]: Nulleable<T[K]>;
  };

  type UnknownObject<T> = {
    [K in keyof T]: Unknown<T[K]>;
  };

  type LiteralObject<
    T = any,
    K extends keyof any = string | number | symbol
  > = Record<K, T>;

  type Unsubscription = () => void;

  type OneOrMany<T> = T | T[];

  type ValueOrFunction<T> = T | (() => T);

  type Awaitable<T> = T | Promise<T>;

  type KeysOmit<T, V> = {
    [K in keyof T]: T[K] extends V ? never : K;
  }[keyof T];

  type KeysOmitFunction<T> = KeysOmit<T, (...args: any[]) => any>;
}

export {};
