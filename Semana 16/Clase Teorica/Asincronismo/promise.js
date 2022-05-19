//pendiente estado inicial
//cumplido exitosa
//rechazado falla
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('se resolvio la promesa'), 2000);
});

// .then permite consumir la promesa
promise.then((response) => {
    console.log(response);
})