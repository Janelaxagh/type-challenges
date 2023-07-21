type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type TypeFirst<T extends any[]> = T extends [infer P, ...any[]] ? P : never

type head1 = TypeFirst<arr1> // expected to be 'a'
type head2 = TypeFirst<arr2> // expected to be 3