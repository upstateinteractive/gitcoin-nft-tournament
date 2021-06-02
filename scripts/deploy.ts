import { ethers } from "hardhat"

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  )
  
  console.log("Account balance:", (await deployer.getBalance()).toString())

  const Tournament = await ethers.getContractFactory("Tournament")
  const tournament = await Tournament.deploy()

  await tournament.deployed()

  console.log("Tournament deployed to:", tournament.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })