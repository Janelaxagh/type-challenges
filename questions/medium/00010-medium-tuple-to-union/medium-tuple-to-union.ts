type Arr = ['1', '2', '3']

type TypeTupleToUnion<T extends any[]> = T[number]

type Test = TypeTupleToUnion<Arr> // '1' | '2' | '3'
