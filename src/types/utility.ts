export type TupleFromInterface<T> = {
  [K in keyof T]: T[K]
}[keyof T][]
