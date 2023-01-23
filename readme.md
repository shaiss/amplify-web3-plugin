# Amplify Web3 Plugin

This is a web3 plugin for interacting with the Ethereum blockchain using the web3.js library. It allows developers to easily perform common operations such as getting the current block number, getting the balance of a specific address, and getting transaction details by its hash.

## Getting Started

1. Install the package using npm:
```
npm install amplify-web3-plugin
```

2. Import the web3 module in your project:
```
const web3 = require('amplify-web3-plugin');
```

3. Configure the web3 instance to use the desired Ethereum node. By default, it is set to use the Infura mainnet node.
```
web3.configure({
    nodeUrl: 'https://mainnet.infura.io/v3/677dd554ce8a44339be26d9316902b4a'
});
```

4. Use the web3 instance to interact with the Ethereum blockchain. For example, to get the current block number:
```
web3.eth.getBlockNumber().then(console.log);
```

5. Advanced usage example:
```
describe('web3 advanced tests', () => {
  test('eth_getTransactionReceipt', async () => {
    const transactionHash = '0x483bb63ffb0c37b6141fb314872a3da9e2d0b70138a9e58246a6083799b12616';
    const receipt = await web3.eth.getTransactionReceipt(transactionHash);
    console.log(`Transaction receipt for hash ${transactionHash}:`, receipt);
    expect(receipt.transactionHash).toEqual(transactionHash);
  });
});
```

## Available Methods

* `eth.getBlockNumber()`: Returns the current block number.
* `eth.getBalance(address)`: Returns the balance of a specific address in wei.
* `eth.getTransactionCount(address)`: Returns the number of transactions made by a specific address.
* `eth.getBlock(blockNumber)`: Returns the details of a specific block by its block number.
* `eth.getTransaction(transactionHash)`: Returns the details of a specific transaction by its


## To install this package, run the following command:

```
npm install amplify-web3-plugin
```

## Usage

Before using the package, make sure to configure it with the desired node URL and any other necessary options. This can be done by creating a `web3config.js` file and importing it into your project. An example configuration is shown below:

```
const config = {
    nodeUrl: 'https://mainnet.infura.io/v3/677dd554ce8a44339be26d9316902b4a',
}

module.exports = {config}
```

Once the configuration is set up, you can import the `web3` module and use its methods to interact with the Ethereum network.

```
const web3 = require('amplify-web3-plugin');
const web3config = require('./web3config');

web3.configure(web3config.config);

web3.eth.getBlockNumber().then(console.log);
```

## Basic Tests
This package includes basic tests for node connectivity, block number, network id and balance of an address. 

To run the basic tests, navigate to the project's root directory and run the following command:
```
npm run test
```

### eth_blockNumber
This test can be used to check the current block number on the Ethereum network. It returns the current block number and validates that it is greater than 0.

### eth_getBalance
This test can be used to check the balance of a given Ethereum address. It takes in an address as a parameter, returns the balance in wei and ether, and validates that the balance is greater than 0.

### net_version
This test can be used to check the network id of the connected Ethereum node. It returns the network id and validates that it is equal to 1 (mainnet).

## Advanced Tests
This package includes advanced tests for block details, transaction count, transaction details and transaction receipt.

To run the advanced tests, navigate to the project's root directory and run the following command:
```
npm run test
```

### eth_getBlock
This test can be used to check the details of a given block by its block number

### eth_getTransactionReceipt
This test can be used to check the details of the receipt for a given transaction by its transaction hash. This includes information such as the block number, gas used, and any logs that were generated as a result of the transaction.

### eth_getBlock
This test can be used to check the details of a specific block by its block number. This includes information such as the timestamp, the number of transactions, and the list of transaction hashes included in the block.

### eth_getTransaction
This test can be used to check the details of a specific transaction by its transaction hash. This includes information such as the sender and receiver address, the amount of ether transferred, and the gas used.

# Accreditation

This project was a collaboration between myself, Shai Perednik, and the powerful AI language model, ChatGPT3. While ChatGPT3 provided valuable assistance in generating code and providing suggestions, the final product is a testament to the power of human ingenuity and the ability to utilize cutting-edge technology to solve complex problems.

It's important to note that while AI is a valuable tool, it's not a replacement for human expertise. The creative and analytical thinking provided by a human is still essential in the development process. With the combination of human and AI, we were able to create a robust and reliable web3 plugin that is easy to use and understand.

# License

This project is licensed under the MIT License. Feel free to use and modify the code as you see fit, but please make sure to give appropriate credit to the original authors.

# Todos
[] Integrate this web3 plugin with AWS Amplify for easy deployment and use in web and mobile applications
[] Add support for other blockchain networks
[] Implement error handling for common issues such as network timeouts and invalid input parameters