const hre = require("hardhat");

async function main() {

    const DatasetRequest = await hre.ethers.getContractFactory("DatasetRequest");

    const contract = await DatasetRequest.deploy();

    await contract.waitForDeployment();

    console.log("Contract Address:");

    console.log(await contract.getAddress());

}

main().catch((error) => {

    console.error(error);

    process.exitCode = 1;

});