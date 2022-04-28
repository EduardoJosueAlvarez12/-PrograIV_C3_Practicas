const {empresasUsanNodejs} = require("./datos");
var i = 0;

console.log("Principales que usan Node.js:")
empresasUsanNodejs.forEach((empresa) => {
    i ++;
    console.log(`${i}) ${empresa}`);
});