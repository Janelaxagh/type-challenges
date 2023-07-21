// type tesla = ['tesla', 'model 3', 'model X', 'model Y']
// type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
//
// type TypeLength<T readonly any[]> = T['length']
//
// type teslaLength = TypeLength<tesla>  // expected 4
// type spaceXLength = TypeLength<spaceX> // expected 5