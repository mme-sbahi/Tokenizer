import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect("sepolia");

  console.log("Deploying Frontend42Token...");

  const token = await ethers.deployContract(
    "Frontend42Token"
  );

  await token.waitForDeployment();

  const address = await token.getAddress();

  console.log("Token deployed successfully!");
  console.log("Contract address:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});