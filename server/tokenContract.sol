// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenTemplate is ERC20{
    constructor(string memory name, string memory symbol, uint8 decimal, uint256 initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply * 10 **uint256(decimal));
    }
}