const express = require('express');
const socket = require('socket.io');

//configuracion de la aplicaciones
const app = express();
const server = app.listen(3000, () => {
    console.log("http://localhost:3000");
});

app.use(express.static("public")); //archivos estaticos

const users = new Set(); //set crea una variable iterable

//config socket
const io = socket(server);

io.on("connection", (socket) => {
    console.log("Socket connection");

    //eventos
    //crear nuevos usuarios
    socket.on("newUser", (data) => {
        socket.userId = data;
        users.add(data);
        io.emit("newUser", [...users]);
    });
    socket.on("disconnect", () => {
        users.delete(socket.userId);
        io.emit("userDisconnected", socket.userId);
    });
    socket.on("chat", (data) => {
        io.emit("chat", data);
    });
    socket.on("typing", (data) => {
        socket.broadcast.emit("typing", data);
    });
});