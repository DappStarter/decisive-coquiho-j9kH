require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain hospital imitate prize foam text'; 
let testAccounts = [
"0x84e4bdc6b5f5cda54db7522fe35489a66fdc46913db86407fb0e30a5ad6c9e74",
"0x61bbc2fd9b841737613b77183c6df4bb3c40ab94e2a9c7fd0c1453b9599ff24d",
"0xd0890be97e0995299e595b61f3cac61919cf6a2f7823a54c34623e841da57cce",
"0xc5497bd1cace8d9bd27f9626c6b2e5cc6ba7254cb974356c4b237e46c028063e",
"0x541948127b5fa580d15b9451b709227d325a149a22de3e49c5c591a8e3bc486a",
"0xc5e66a4ae61614ee44b3484f6cf1e8517789825f70cb99cec6842be347bfd03f",
"0x2082efcfa79e213451a3de52a99c1dffc4c451a64dc8fd8411d8f056023cb32c",
"0x124b48e63a52e253720312791ab8283f9e1631870df9c1b5e8859d1239a953a2",
"0x6e1843d8dfde2a19dd5239d92b1e9e7e4cfe715e986c4c00342783240a429714",
"0x155c0b4743290d350ddd7f3ca40a103da9c2314ae9f2728341366d217729f642"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

