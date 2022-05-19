const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://ghibliapi.herokuapp.com/films')
.then((response) => {
    console.log('Se extrajo correctamente el precio de bitcoin');
    let bitcoinData = '';
    console.log(response.data.bpi.USD)
    response.data.bpi.forEach(row => {
        bitcoinData += `${row['code']}, ${row['symbol']}, ${row['rate']}, ${row['description']}, ${row['rate_float']}\n`;
    });

    return fs.writeFile('bitcoinPrice.csv');
})
.then(() => {
    console.log('Se guardo el precio del bitcoin en bitcoinPrice.csv');
})