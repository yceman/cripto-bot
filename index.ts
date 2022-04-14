/*import {axios} from 'axios';*/

async function process(){
    const axios = require("axios");
    const response = await axios.get("https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m");
    console.log(response.data);
}
process();
console.log("Test");