type TypeMyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type a = TypeMyReturnType<typeof fn> // should be "1 | 2"