const { resolve } = require("path");

const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readLine.question("Ingrese el numero 1: ", (numero1) => {
    readLine.question("Ingrese el numero: ", (numero2) => {
        readLine.question("Operacion: ", (operacion) => {
            if(operacion==="1"){
                console.log(parseFloat(numero1) + parseFloat(numero2))
            }
        })
    })
})

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




