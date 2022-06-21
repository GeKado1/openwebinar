/* 1 */
var arrayEj = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log("Los números pares son:")
for (var i = 0; i < arrayEj.length; i++) {
    if (arrayEj[i]%2 == 0) {
        console.log(arrayEj[i]);
    }
}

/* 2 */
var resultadoSuma = 0;

for (var i = 0; i < arrayEj.length; i++) {
    resultadoSuma = resultadoSuma + arrayEj[i];
}
console.log("La suma de todos los números es: " + resultadoSuma);