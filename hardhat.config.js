require("@nomicfoundation/hardhat-toolbox");

const { privateKey } = require('./secrets.json')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287,
      accounts: [privateKey]
    }
  }
};
