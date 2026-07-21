const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
    "http://127.0.0.1:8545"
);

const privateKey = "your_private_key";

const wallet = new ethers.Wallet(
    privateKey,
    provider
);

const contractAddress = "your_contract_address";

const contractJson = require("./DatasetRequest.json");

const contract = new ethers.Contract(
    contractAddress,
    contractJson.abi,
    wallet
);

module.exports = contract;