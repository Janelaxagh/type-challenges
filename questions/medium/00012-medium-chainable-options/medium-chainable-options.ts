type Chainable = {
	option<K extends string, V>(key: K, value: V): Chainable & { [P in K]: V }
	get(): IResult
}

type TypeResult = { [key: string]: any }

// Example usage:

declare const config: Chainable

const result = config
	.option('foo', 123)
	.option('name', 'type-challenges')
	.option('bar', { value: 'Hello World' })
	.get()

// expect the type of result to be:
interface IResult {
	foo: number
	name: string
	bar: {
		value: string
	}
}
