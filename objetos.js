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

console.log("Hola, hoy es " + dia + " del mes " + mes + " del año " + anyo);