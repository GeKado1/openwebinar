const miFuncion = (val) => {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve('El valor es true!');
        }
        else {
            reject('El valor es false!');
        }
    });
}

const funcExito = (res) => {
    console.log(res);
};

const funcError = (res) => {
    console.log(res);
}

miFuncion(true).then(funcExito, funcError); //Imprimira el mensaje de exito por consola
miFuncion(true).then(funcExito).catch(funcError); //Imprimira el mensaje de exito por consola

miFuncion(false).then(funcExito, funcError); //Imprimira el mensaje de error por consola
miFuncion(false).then(funcExito).catch(funcError); //Imprimira el mensaje de error por consola