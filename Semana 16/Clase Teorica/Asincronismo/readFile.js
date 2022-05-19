const fs = require('fs');
const fileName = "file.txt";

//promesas
const data = fs.readFileSync(fileName);

const promise = new Promise((resolve) => {
    resolve(data.toString());
});

promise.then((response) => {
    console.log(response);
});


//sincrona usando readFileSync, usa callback api
//se pueden consultar en la documentacion
// const data = fs.readFileSync(fileName);
// console.log(data.toString());

// console.log('sincrono');


//codigo asincrono
// fs.readFile(fileName, (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString())
// })

// console.log('Asincrono');