type TypeDeepReadonly<T> = {
	readonly [K in keyof T]: T[K] extends object ? TypeDeepReadonly<T[K]> : T[K]
}

type X = {
	x: {
		a: 1
		b: 'hi'
	}
	y: 'hey'
}

type Expected = {
	readonly x: {
		readonly a: 1
		readonly b: 'hi'
	}
	readonly y: 'hey'
}

type Todo = TypeDeepReadonly<X> // should be same as `Expected`
