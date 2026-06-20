// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Frontend42Token
/// @notice ERC20 token created for the 42 Tokenizer project
contract Frontend42Token is ERC20, Ownable {

    /// @notice Creates the token and mints the initial supply to the deployer
    constructor()
        ERC20("Frontend42Token", "F42")
        Ownable(msg.sender)
    {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    /// @notice Creates new tokens and assigns them to an address
    /// @param to Recipient address
    /// @param amount Amount of tokens to mint
    function mint(address to, uint256 amount)
        public
        onlyOwner
    {
        _mint(to, amount);
    }

    /// @notice Burns tokens from the caller's balance
    /// @param amount Amount of tokens to burn
    function burn(uint256 amount)
        public
    {
        _burn(msg.sender, amount);
    }
}