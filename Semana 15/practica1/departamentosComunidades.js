const {departamentos, comunidades} = require("./datos.js");

console.log("Departamentos: ")
departamentos.forEach((departamento) => {
    console.log(departamento);
});


console.log("----------------------------------------------------")
console.log("Comunidades: ")
comunidades.forEach((comunidad) => {
    console.log(comunidad);
});