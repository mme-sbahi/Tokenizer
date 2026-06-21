# Deployment

## Network

Ethereum Sepolia Testnet

## Deployment Process

1. Created a MetaMask wallet.
2. Obtained SepoliaETH from a faucet.
3. Configured Hardhat with:

   * Sepolia RPC URL
   * Private key stored in `.env`
4. Compiled the contract using:

```bash
npx hardhat compile
```

5. Deployed the contract using:

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

## Deployed Contract

Contract Address:

0xB834a3e719A0f2AB82723e5FBECE7ef5c727D511

## Verification

The deployment transaction was successfully confirmed on the Sepolia network and the contract can be inspected through a blockchain explorer.
