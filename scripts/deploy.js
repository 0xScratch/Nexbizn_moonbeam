// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // deploying both NexToken and NexNFT contracts
  const nexToken = await hre.ethers.deployContract('NexToken');
  await nexToken.waitForDeployment();

  const nexNFT = await hre.ethers.deployContract('NexNFT');
  await nexNFT.waitForDeployment();

  console.log("NexToken deployed to:", nexToken.target);
  console.log("NexNFT deployed to:", nexNFT.target);

  // deploying the Auction contract
  const auction = await hre.ethers.deployContract('Auction', [nexToken.target, nexNFT.target]);
  await auction.waitForDeployment();

  console.log("Auction deployed to:", auction.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

```
NexToken deployed to: 0x0E6F513B2DfE36A3d922Db804f3568669679d911
NexNFT deployed to: 0x582007F4269981CbBD6106f3fa99f4579B0A7287
Auction deployed to: 0xB284EeFB59823d36B81f88d45c71B4d98a99aE34
```