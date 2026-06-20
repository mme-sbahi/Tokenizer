SPDX License Identifier
// SPDX-License-Identifier: MIT

Specifies the license under which the smart contract is distributed.

MIT is a permissive open-source license.

Solidity Version
pragma solidity ^0.8.28;

Defines the Solidity compiler version required to compile the contract.

The ^ symbol means:

>= 0.8.28 and < 0.9.0
ERC20 Import
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

Imports OpenZeppelin's implementation of the ERC20 standard.

This implementation already contains:

transfer()
balanceOf()
approve()
allowance()
transferFrom()
totalSupply()
decimals()

Without this import, all those functions would need to be implemented manually.

Ownable Import
import "@openzeppelin/contracts/access/Ownable.sol";

Imports OpenZeppelin's ownership system.

Provides:

owner()
transferOwnership()
renounceOwnership()
onlyOwner

This allows certain functions to be restricted to the contract owner.

Contract Declaration
contract Frontend42Token is ERC20, Ownable

Creates a new smart contract called:

Frontend42Token

The keyword:

is ERC20, Ownable

means inheritance.

The contract inherits functionality from both parent contracts.

Constructor
constructor()
    ERC20("Frontend42Token", "F42")
    Ownable(msg.sender)

The constructor executes once when the contract is deployed.

It performs initialization.

ERC20 Initialization
ERC20("Frontend42Token", "F42")

Initializes the ERC20 parent contract.

Sets:

Name   = Frontend42Token
Symbol = F42

These values are visible in wallets and blockchain explorers.

Ownership Initialization
Ownable(msg.sender)

Sets the deployer as the owner.

msg.sender represents the address that deployed the contract.

Only this address can call functions protected by onlyOwner.

Initial Supply Creation
_mint(msg.sender, 1000000 * 10 ** decimals());

Creates the initial token supply.

The newly created tokens are assigned to the deployer's wallet.

Why use decimals()?

ERC20 tokens generally use:

18 decimals

meaning:

1 token
=
1,000,000,000,000,000,000 units

Therefore:

1000000 * 10 ** decimals()

creates:

1,000,000 tokens

internally represented with 18 decimal precision.

Mint Function
function mint(address to, uint256 amount)
    public
    onlyOwner

Creates new tokens and assigns them to a specified address.

Parameters:

to     = recipient address
amount = amount of tokens to create
onlyOwner Modifier
onlyOwner

Restricts access to the owner.

If a non-owner calls the function:

Transaction Reverted

This prevents unauthorized token creation.

Internal Minting
_mint(to, amount);

Updates:

totalSupply

and:

recipient balance

automatically.

OpenZeppelin handles all validations internally.

Burn Function
function burn(uint256 amount)

Allows token holders to destroy their own tokens.

Burning Process
_burn(msg.sender, amount);

Removes tokens from the caller's balance.

At the same time:

totalSupply

is reduced.

Example:

Before

Balance     = 1000
TotalSupply = 1000000

Burn:

100

Result:

Balance     = 900
TotalSupply = 999900
Inherited Functions

Because the contract inherits ERC20, it automatically includes:

Function	Purpose
balanceOf()	Returns wallet balance
transfer()	Sends tokens
approve()	Grants spending permission
allowance()	Returns granted permission
transferFrom()	Transfers using permission
totalSupply()	Returns token supply
name()	Returns token name
symbol()	Returns token symbol
decimals()	Returns decimal precision

No additional implementation is required.

Design Choices
Why OpenZeppelin?

OpenZeppelin provides:

Audited code
Standard compliance
Security best practices
Community-reviewed implementations

Using OpenZeppelin reduces the risk of introducing vulnerabilities.

Why Ownable?

The project requires token management.

Ownership allows:

Controlled minting
Administrative actions
Better security
Why Burn Tokens?

Burning introduces a mechanism to permanently remove tokens from circulation.

This can be used to:

Reduce supply
Demonstrate token destruction
Implement future tokenomics strategies