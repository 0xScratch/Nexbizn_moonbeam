// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

/*
    Trial contract
*/ 
contract Rocket {
    string public name;
    string public status;
    address public owner;

    constructor(string memory _name) {
        name = _name;
        status = "ignition";
        owner = msg.sender;
    }

    function launch() public {
        status = "lift-off";
    }

    function sender() public view returns (address) {
        return owner;
    }
}