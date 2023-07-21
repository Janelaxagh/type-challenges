type TypeUnshift<T extends any[], U> = [U, ...T]

type Result = TypeUnshift<[1, 2], 0> // [0, 1, 2,]