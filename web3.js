const Web3 = require('web3');

let web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/[NODE_API]"));

module.exports = web3;
