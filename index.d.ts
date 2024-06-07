declare global {
  type Undefined<T> = T | undefined;
  type Nulleable<T> = T | null;
  type Unknown<T> = T | unknown;

  type Any<T extends Object> = string | number | symbol | boolean | T;

  type UndefinedObject<T> = {
    [K in keyof T]: Undefined<T[K]>;
  };

  type NullableObject<T> = {
    [K in keyof T]: Nulleable<T[K]>;
  };

  type UnknownObject<T> = {
    [K in keyof T]: Unknown<T[K]>;
  };

  type LiteralObject<T = any> = Record<string, T>;

  type Unsubscription = () => void;

  type OneOrMany<T> = T | T[];

  type ValueOrFunction<T> = T | (() => T);

  type KeysOmit<T, V> = {
    [K in keyof T]: T[K] extends V ? never : K;
  }[keyof T];

  type KeysOmitFunction<T> = KeysOmit<T, Function>;
}

export {};
