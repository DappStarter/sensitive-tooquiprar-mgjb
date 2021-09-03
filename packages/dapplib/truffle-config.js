require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net purse hunt knee front sport'; 
let testAccounts = [
"0x6021f5b42586f378141eadeb91bba96aa73f973ab0e7864ff5011de05c7bdd2f",
"0xc87284d2cf4465f33a93fcdd463aa24a65efa829fbf7ad9adb591f2b9664960a",
"0x0fabc19b1141586cd647171efd5c64cf900747305c623356c6361dae3c7339e0",
"0xadab01d69b6770634bdde4cf7ebb00a5e5a8bec780d92356bf6655ff6899043a",
"0x889b9a29f32cfa9eefb52e8ed485d3038ea6661e7a1e61f8db30f39ea7e47115",
"0xaa9c6bf19554647025c4d15031345ec6832d42e544cd43086d137718bc21a77d",
"0xbfa86192a5d2c6b2e9d7259b326f1d9007ceac621d5abb99307a1e5f28c4b64c",
"0xa39fbe1b6527ad062e47fcb5a85a876852135ee66c421dd2318dac062e0fa223",
"0xcba615c8ed936b9b7a03b9c1c26eeb94c8494668a1f912db0f70c3d06dc76d3c",
"0x68f38394963e117490eb015a93f2f7de6f9c180ce019c2a763a48f2510a29be6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


