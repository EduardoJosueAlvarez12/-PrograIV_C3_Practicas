//esta funcion es anonima y sincrona
//los callback se reciben al final
// const operation = (n1, n2, op) => {
//     return op(n1, n2);
// }

// console.log(operation(5,6, (a,b) => (a+b)));


const operation = (n1, n2, op) => {
    setTimeout(() => {
        return op(n1, n2);
    }, 500);
}

operation(5,6, (a,b) => {
    console.log(a+b);
});