const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

const SEED = fs.readFileSync(".secret").toString().trim();
const INFURA_LINK = "https://rinkeby.infura.io/v3/053f363db26f4a1cbd5baa36fe24716c"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      websockets: true
    },

    rinkeby: {
      provider: () => new HDWalletProvider(SEED, INFURA_LINK),
        network_id: 4,       // rinkeby's id
        gas: 9000000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000,
        confirmations: 1, // # of confs to wait between deployments. (default: 0)
        skipDryRun: true
    }
  },

  compilers: {
    solc: {
      version: "0.6.2",
    }
  }
};