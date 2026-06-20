ERC20 / BEP20

ERC20 is the token standard on Ethereum.

BEP20 is the equivalent standard on BNB Chain.

The project uses OpenZeppelin's ERC20 implementation because BNB Chain is EVM compatible.

Main Functions
transfer()

Transfers tokens between wallets.

balanceOf()

Returns the balance of a wallet.

approve()

Authorizes another address to spend tokens.

allowance()

Returns the approved amount.

transferFrom()

Transfers tokens using a previous approval.

05_token_implementation.md

This is the most important document.

Explain YOUR contract.

Token Information
Name: Frontend42Token
Symbol: F42
Initial Supply: 1,000,000
Decimals: 18
Inheritance
contract Frontend42Token is ERC20, Ownable

The contract inherits:

ERC20

Provides:

transfer
approve
allowance
transferFrom
balanceOf
Ownable

Provides:

owner
onlyOwner
ownership transfer
Constructor
constructor()

Executed once during deployment.

Responsibilities:

Set token name
Set token symbol
Mint initial supply
Mint Function
function mint(...)

Restricted by:

onlyOwner

Purpose:

Create new tokens.

Burn Function
function burn(...)

Purpose:

Destroy tokens owned by the caller.