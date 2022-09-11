// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract TokenTemplate is ERC20 {
    address public owner;
    string private _name;
    string private _symbol;
    uint8 private _decimals;

    event serverStatus(string serverMessage);

    constructor( string memory owner, string memory tokenName, uint8 decimal, uint256 totalSupply, string memory tokenSymbol) public payable {
        _name = tokenName;
        _symbol = tokenSymbol;
        _decimals = decimal;

        _mint(owner, totalSupply * 10 ** _decimals);



    }
}