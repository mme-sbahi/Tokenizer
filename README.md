# Tokenizer

## Overview

Tokenizer is a blockchain project that consists of creating and deploying an ERC20-compatible token on the Ethereum Sepolia Testnet.

The objective of this project is to understand blockchain fundamentals, smart contracts, token standards, wallets, deployment, and security concepts.

---

## Platform Choice

Ethereum Sepolia Testnet was chosen because it is one of the most widely used Ethereum testing networks. It allows safe deployment and testing of smart contracts without spending real ETH while remaining compatible with the Ethereum ecosystem and development tools such as Hardhat, OpenZeppelin, and MetaMask.


## Language Choice

The smart contract was developed in Solidity because it is the standard language for writing Ethereum-compatible smart contracts.


## Features

* ERC20-compatible token
* Token transfers
* Ownership management
* Token minting
* Token burning
* OpenZeppelin integration
* Hardhat development environment

---

## Token Information

| Property       | Value           |
| -------------- | --------------- |
| Name           | Frontend42Token |
| Symbol         | F42             |
| Initial Supply | 1,000,000       |
| Decimals       | 18              |

---

## Technologies Used

* Solidity
* Hardhat
* OpenZeppelin Contracts
* MetaMask
* Ethereum Sepolia Testnet

---

## Project Structure

tokenizer/

├── contracts/

│   └── Frontend42Token.sol

├── scripts/

│   └── deploy.ts

├── test/

├── documentation/

├── deployment/

└── README.md

---

## Installation

```bash
npm install
```

---

## Compile

```bash
npx hardhat compile
```

---

## Run Tests

```bash
npx hardhat test
```

---

## Deployment

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

---

## Smart Contract Features

### Minting

The owner of the contract can create new tokens using the mint function.

### Burning

Token holders can permanently destroy their own tokens using the burn function.

### Ownership

Administrative actions are protected using OpenZeppelin's Ownable contract.

---

## Security

The contract relies on audited OpenZeppelin implementations of:

* ERC20
* Ownable

This reduces the risk of introducing security vulnerabilities.

---

## Author

42 Network - Tokenizer Project


## Deployment Information

Network: Ethereum Sepolia

Contract Address:
0xB834a3e719A0f2AB82723e5FBECE7ef5c727D511

The contract was successfully deployed and can be interacted with through MetaMask or any Ethereum-compatible tool connected to the Sepolia test network.