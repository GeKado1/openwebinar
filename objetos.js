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

var date = new Date();

var anyo = date.getFullYear();
var mes = date.getMonth() + 1;
var dia = date.getDay();

//console.log("Hola, hoy es " + dia + " del mes " + mes + " del año " + anyo);

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

console.log(random(10));