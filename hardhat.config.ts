import "dotenv/config"
import "@typechain/hardhat"
import "solidity-coverage"
import "hardhat-contract-sizer"
import "hardhat-gas-reporter"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"

const infuraID = process.env.INFURA_ID || ""
const mnemonic = process.env.MNEMONIC || ""

export default {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://localhost:8545"
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraID}`,
      accounts: {
        mnemonic: mnemonic
      }
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraID}`,
      accounts: {
        mnemonic: mnemonic
      }
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraID}`,
      accounts: {
        mnemonic: mnemonic
      }
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraID}`,
      accounts: {
        mnemonic: mnemonic
      }
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraID}`,
      accounts: {
        mnemonic: mnemonic
      }
    }
  },
  solidity: {
    version: "0.8.0",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    gasPrice: 21
  }
}