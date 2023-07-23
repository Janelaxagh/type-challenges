interface ITodo {
	title: string
	description: string
	completed: boolean
}

type TypeMyReadonly2<T, K extends keyof T> = Omit<T, K> & {
	readonly [P in K]: T[P]
}

const todo: TypeMyReadonly2<ITodo, 'title' | 'description'> = {
	title: 'Hey',
	description: 'foobar',
	completed: false
}

// todo.title = 'Hello' // Error: cannot reassign a readonly property
// todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK
