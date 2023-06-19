require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com", // Polygon Mumbai RPC endpoint
      accounts: ['f072a46c2b6a21ac8167e76f2198fc7a01814b4d93a03c960562d20dda0635b2'], // Replace with the private key of your Ethereum account
    },
  },

};
