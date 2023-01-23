const web3 = require('./web3');
const web3config = require('./web3config');

web3.configure(web3config.config);

web3.getAccounts().then(console.log);
