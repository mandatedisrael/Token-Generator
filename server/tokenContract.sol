// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract TokenTemplate is ERC20 {
    address public owner;
    uint8 private _decimals;
    string tokenName;
    string tokenSymbol;

    event serverStatus(string serverMessage);

    constructor (uint256 _tokenSupply, address _owner) ERC20 (tokenName,tokenSymbol){
        _mint(_owner, _tokenSupply);

    }
}