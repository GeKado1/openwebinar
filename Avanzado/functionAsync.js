async function functionAsync() {
    return Promise.resolve('Funciona!');
}

async function functionAsync2() {
    return 'Funciona!';
}

let functionAsync3 = async () => {
    return 'Funciona!';
}

functionAsync().then(resp => console.log(resp)); //Esto imprimirá 'Funciona!' por la consola
functionAsync2().then(resp => console.log(resp)); //Esto imprimirá 'Funciona!' por la consola

//Uso con await
async function functionAsyncAwait() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hecho'), 1000);
    });

    let result = await promise; //La ejecución se parará aquí

    console.log(result); //Imprimirá por consola 'Hecho!'
}

functionAsyncAwait();
setTimeout(() => console.log('Qué tal?', 1100));
console.log('Hola'); //Esto sacará los dialogos en el orden: 'Hola', 'Hecho', 'Qué tal?'

//Promise a async/await
//Promise
let promesa = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
.then(res => console.log(res * 2))
.then(res => console.log(res * 4))
.catch(error => console.log(error));

//Async/await
try {
    let res = noPromise() * 2;
    res = res * 4;
}
catch (error) {
    console.error(error);
}

//Promise
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

//Async/await
async function peticion() {
    try {
        let response = await fetch('/user.json');
        let user = response.json();
        response = await fetch('https://api.github.com/users/${user.name}');
        let githubUser = response.json();

        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);
        setTimeout(() => img.remove(), 3000);
    }
    catch (error) {
        console.log(error.message);
    }
}

async function petition() {
    let response = await fetch('user.json');
    
    if (!response.ok) {
        throw new Error('Error HTTP con status: ${response.status}');
    }
    else {
        let user = response.json();
        response = await fetch('https://api.github.com/users/${user}');
        let githubUser = response.json();

        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);
        setTimeout(() => img.remove(), 3000);
    }
}

petition().catch(error => console.log(error)); //Esto imprimirá el error lanzado si el status de la primera peticion no es "ok"