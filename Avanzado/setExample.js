const setExample = new Set([2, 3, 3, 2]);
//setExample almacena [2, 3]

setExample.has(2); //Retorna true
setExample.has(1); //Retorna false

setExample.add(2); //El array se queda -> [2, 3]
setExample.add(1); //El array se queda -> [2, 3, 1]

setExample.delete(2); //El array se queda -> [3, 1]

const newObj = {};
const otherObj = {};

setExample.add(newObj); //El array se queda -> [2, 3, 1, {}]
setExample.add(newObj); //El array se queda -> [2, 3, 1, {}]
setExample.add(otherObj); //El array se queda -> [2, 3, 1, {}, {}]