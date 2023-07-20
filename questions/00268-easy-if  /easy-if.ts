type TypeIf<C extends boolean, T, F> = C extends true ? T : F;

type A = TypeIf<true, 'a', 'b'>  // expected to be 'a'
type B = TypeIf<false, 'a', 'b'> // expected to be 'b'