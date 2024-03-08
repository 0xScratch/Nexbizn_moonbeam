// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NexToken is ERC20, Ownable {
    constructor() ERC20("Nexbizn", "NEX") Ownable(msg.sender) {}

    uint public constant price = 0.1 ether;

    // Mint tokens
    function buyToken(uint amount) payable external {
        require (amount > 0, "You need to mint at least 1 token");
        require(msg.value >= price * amount, "Not enough ether sent");
        _mint(msg.sender, amount);
    }

    // Burn tokens
    function sellToken(uint amount) external {
        require (amount > 0, "You need to sell at least 1 token");
        require(balanceOf(msg.sender) >= amount, "Not enough tokens to sell");
        _burn(msg.sender, amount);
        payable(msg.sender).transfer(price * amount);
    }
}