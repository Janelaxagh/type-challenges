type TypeConcat<T extends any[], U extends any[]> = T extends [] ? U : T extends [infer H, ...infer Rest] ? [H, ...TypeConcat<Rest, U>] : never;

type Result = TypeConcat<[1], [2]> // expected to be [1, 2]