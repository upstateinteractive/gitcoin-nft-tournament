import "@typechain/hardhat"
import "solidity-coverage"
import "hardhat-contract-sizer"
import "hardhat-gas-reporter"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"

export default {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
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
    enabled: false,
    currency: "USD",
    gasPrice: 21
  }
}