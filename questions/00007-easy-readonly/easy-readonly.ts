interface ITodo {
    title: string
    description: string
}

type TypeMyReadonly<T> = T & {
    readonly [K in keyof T]: T[K]
}


const todo: TypeMyReadonly<ITodo> = {
    title: "Hey",
    description: "foobar"
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property