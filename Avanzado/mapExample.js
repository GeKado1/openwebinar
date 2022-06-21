const mapExample = new Map({a: 1, b: 4});
//mapExample almacena {a: 1, b: 4}

mapExample.has('a'); //Retorna true
mapExample.has('c'); //Retorna false

mapExample.set('c', 5); //El map se queda {a: 1, b: 4, c: 5}
mapExample.get('c'); //Retorna el valor de c que es 5

mapExample.delete('a'); //El map se queda {b: 4, c: 5}

const newObj = {};

mapExample.set(newObj, 5); //El map se queda {b: 4, c: 5, ref: 5}
mapExample.delete({}) //El map se queda {b: 4, c: 5, ref: 5}
mapExample.delete(newObj); //El map se queda {b: 4, c: 5}