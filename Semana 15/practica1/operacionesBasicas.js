const { resolve } = require("path");

var numero1 = 0;
var numero2 = 0;

const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const consultarNum1 = () => {
    return new Promise((resolve, reject) => {
        readLine.question("Escriba el primer número: ", num1=>{
            numero1 = num1
            resolve()
        })
    })
}

const consultarNum2 = () => {
    return new Promise((resolve, reject) => {
        readLine.question("Escriba el segundo número: ", num2=>{
            numero2 = num2
            resolve()
        })
    })
}

const sum = (n1, n2) => {
    console.log(`El numero ${n1} `)
}




const main = async () => {
    await consultarNum1()
    await consultarNum2()
    await sum()

    readLine.close()
}

main()


