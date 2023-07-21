const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TypeTupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
}

type result = TypeTupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

