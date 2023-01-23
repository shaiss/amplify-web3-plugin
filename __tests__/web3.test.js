const web3 = require('../web3');

describe('web3 basic tests', () => {
  test('eth_blockNumber', async () => {
    const blockNumber = await web3.eth.getBlockNumber();
    console.log(`Block number: ${blockNumber}`);
    expect(blockNumber).toBeGreaterThan(0);
  });

  test('eth_getBalance', async () => {
    const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
    const balance = await web3.eth.getBalance(address);
    console.log(`Balance in wei: ${balance}`);
    console.log(`Balance in ether: ${web3.utils.fromWei(balance, 'ether')}`);
    expect(web3.utils.toBN(balance).gt(web3.utils.toBN(0))).toBe(true);
  });


  test('net_version', async () => {
    const networkId = await web3.eth.net.getId();
    console.log(`Network ID: ${networkId}`);
    expect(networkId).toEqual(1);
  });
});


describe('web3 advanced tests', () => {
  test('eth_getTransactionCount', async () => {
    const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
    const transactionCount = await web3.eth.getTransactionCount(address);
    console.log(`Transaction count for address ${address}: ${transactionCount}`);
    expect(transactionCount).toBeGreaterThanOrEqual(0);
});

test('eth_getBlock', async () => {
    const blockNumber = '16466843';
    const block = await web3.eth.getBlock(blockNumber);
    //console.log(`Block details for block number ${blockNumber}:`, block);
    expect(block.number).toBeGreaterThan(0);
});


test('eth_getTransaction', async () => {
    const transactionHash = '0x483bb63ffb0c37b6141fb314872a3da9e2d0b70138a9e58246a6083799b12616';
    const transaction = await web3.eth.getTransaction(transactionHash);
    //console.log(`Transaction details for hash ${transactionHash}:`, transaction);
    expect(transaction.hash).toEqual(transactionHash);
});



});
