//Programacion sincrona, no usamos ninguna
//api asincrona, a excepcion de setTimeout
// proceso -> uno o mas hilos, unidad de ejecucion mas 
//pequeña, hilo -> pertenece a UN proceso

//todas se ejecutan en un hilo o proceso,
//cada metodo es un subproceso o hilo, que tambien puede llevar
//a cabo operaciones simultaneas
//el codigo asincrono
//se ejecuta al finals
function fFirst(){
    console.log("Primera funcion");
}
//llamadaCallBack es una devolucion de llamada
//esta es sincrona
function sSecond(llamadaCallBack){
    //funcion anonima porque no tiene nombre
    //espera 0 milisegundos
    setTimeout(() => {
        console.log("Segunda funcion");
        llamadaCallBack();
    }, 0);
}

function sThird(){
    console.log("Tercera funcion");
}

//llamado a las funciones
fFirst();
sSecond(sThird);
// sThird();