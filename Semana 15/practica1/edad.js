const consultarEdad = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

consultarEdad.question("Escriba su edad: ", edad=>{
    if(edad < 18){
        console.log("Usted es menor de edad");
    } else {
        console.log("Usted es mayor de edad");
    }
});