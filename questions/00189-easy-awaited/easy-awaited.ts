type ExampleType = Promise<string>

type TypeMyAwaited<T> = T extends Promise<infer U> ? U : T;

type Result = TypeMyAwaited<ExampleType> // string