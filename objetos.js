/* 1 */
var jugador = {
    fuerza: 1,
    incrementarFuerza: function() {
        this.fuerza++;
    },
    consultarFuerza: function() {
        console.log("Tu fuerza es de: " + this.fuerza);
    }
};

/*jugador.consultarFuerza();
jugador.incrementarFuerza();
jugador.consultarFuerza();*/

/* 2 */
var date = new Date();
var anyo = date.getFullYear();
var mes = date.getMonth() + 1;
var dia = date.getDay();

//console.log(date);
//console.log("Hola, hoy es " + dia + " del mes " + mes + " del año " + anyo);

/* 3 */
var pi = Math.PI;

/*console.log(pi);
console.log(Math.min(1, 2, 3, 4345, 0, -10));
console.log(Math.max(1, 2, 3, 4345, 0, -10));
console.log(Math.round(4.4));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.2));*/

var aleatorio = Math.random();
//console.log(aleatorio);

function random(numMax) {
    return Math.round(Math.random() * numMax);
}

//console.log(random(10));

/* 4 */
var array1 = [
    'Primer elemento',
    'Segundo elemento',
    11,
    true,
    {key: "Soy el quinto elemento"},
    null
];

var array2 = new Array(3);
var array3 = new Array("rojo", "azul", "verde", "amarillo");

/*console.log(array3);
console.log(array3[0]);
console.log(array3[1]);
console.log(array3[2]);
console.log(array3[3]);
console.log(array3[4]); //posició sin valor definido

array3.push("negro");
console.log(array3);
console.log(array3[4])*/ //ahora tiene valor

/* 5 */
var colores = ["verde", "negro", "azul"];

for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
    console.log(i);
}