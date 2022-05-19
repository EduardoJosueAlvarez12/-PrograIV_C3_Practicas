var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.end("Programacion IV");
});

app.listen(8080, function(){
    console.log("Aplicacion ejemplo con express, ejecutándose en el puerto 8080")
})