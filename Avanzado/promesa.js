function compruebaNombre(nombre) {
    return new Promise(function (resolve, reject) {
        if (nombre === 'Pablo') {
            resolve("¡Bien! Te llamas Pablo");
        }
        else {
            reject("Un momento ¡Tú no eres Pablo!");
        }
    });
}

compruebaNombre('Pablo')
    .then(response => console.log(response))
    .catch(error => console.log(error));

//Esto imprime '¡Bien! Te llamas Pablo' por consola