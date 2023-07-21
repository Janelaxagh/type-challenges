type TypeMyExclude<T, U> = T extends U ? never : T;

type Result = TypeMyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'