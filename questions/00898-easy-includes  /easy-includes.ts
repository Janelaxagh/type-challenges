type TypeIncludes<T extends any[], U> = U extends T[keyof T] ? true : false;

type isPillarMen = TypeIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`