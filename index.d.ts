declare global {
  type Undefined<T> = T | undefined;
  type Nulleable<T> = T | null;
  type Unknown<T> = T | unknown;
}

export {};
