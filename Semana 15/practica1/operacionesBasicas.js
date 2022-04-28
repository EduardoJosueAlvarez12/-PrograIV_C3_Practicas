const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Ingrese el numero 1: ", (numero1) => {
    readLine.question("Ingrese el numero 2: ", (numero2) => {
        readLine.question("Selecciona una operacion 1-Suma 2-Resta 3-Multiplicación 4-División: ", (operacion) => {
            const {sum, rest, multi, div} = require("./funciones.js");
            if(operacion==="1"){
                console.log(sum(numero1, numero2));
            } else if (operacion==="2"){
                console.log(rest(numero1, numero2));
            } else if (operacion==="3"){
                console.log(multi(numero1, numero2));
            } else if (operacion==="4"){
                console.log(div(numero1, numero2));
            } else {
                console.log("Operación inválida");
            }
        });
    });
});

// const consultarNum1 = () => {
//     return new Promise((resolve, reject) => {
//         readLine.question("Escriba el primer número: ", num1=>{
//             numero1 = num1
//         })
//     })
// }

// const sum = (n1, n2) => {
//     console.log(`El numero ${n1} `)
// }




