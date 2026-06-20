import { ethers } from "hardhat";

async function main() {
console.log("Deploying Frontend42Token...");


const Token = await ethers.getContractFactory(
    "Frontend42Token"
);

const token = await Token.deploy();

await token.waitForDeployment();

const address = await token.getAddress();

console.log("Token deployed successfully!");
console.log("Contract address:", address);


}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});
