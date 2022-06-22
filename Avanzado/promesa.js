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

//Encadenamiento de Promesas
let promesa = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then((result) => {
    alert(result); //1
    return result * 2
}).then((result) => {
    alert(result); //2
    return result * 2;
}).then((result) => {
    alert(result); //4
    return result * 2;
});

//No es un encadenamiento
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then((result) => {
    alert(result); //1
    return result * 2;
});

promise.then((result) => {
    alert(result); //1
    return result * 2;
});

promise.then((result) => {
    alert(result); //1
    return result * 2;
});


//Encadenamiento asíncrono
let promesaST = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then((result) => {
    alert(result); //1
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then((result) => {
    //Este manejador esperará 1 segundo a ejecutarse
    alert(result); //2
    return result * 2;
}).then((result) => {
    alert(result); //4
    return result * 2;
});

//Fetch con promesas
fetch('/user.json')
    .then((response) => response.json())
    .then((user) => fetch('https://api.github.com/users/${user.name}'))
    .then((response) => response.json())
    .then((githubUser) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);
        setTimeout(() => img.remove(), 3000); //(*)
    })
    .catch(error => alert(error.message));

// Errores y gestión
let promisaEG = new Promise((resolve, reject) => {
    throw new Error("Error!");
}).catch((error) => {
    alert("El error ha sido manejado con éxito");
}).then(() => alert("Este manejador se ejecuta"));

let promisaEG2 = new Promise((resolve, reject) => {
    throw new Error("Error!");
}).catch((error) => {
    throw error;
}).then(() => alert("Este manejador no se ejecuta"))
.catch((error) => {
    alert("Este manejador se ejecuta con el error")
});