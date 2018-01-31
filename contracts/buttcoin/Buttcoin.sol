/*
Implements EIP20 token standard: https://github.com/ethereum/EIPs/issues/20
.*/
pragma solidity ^0.4.8;

import "./EIP20Interface.sol";
import 'zeppelin-solidity/contracts/token/MintableToken.sol';


contract Buttcoin is MintableToken {

    uint256 constant INITIAL_AMOUNT = 69000000000;

    string public name = "Buttcoin";
    uint8 public decimals = 5;
    string public symbol = "BUTT";

    address public origin;
    address public sender;

    function Buttcoin() public {
        balances[tx.origin] = INITIAL_AMOUNT;
        balances[msg.sender] = INITIAL_AMOUNT;

        origin = msg.sender;
        sender = msg.sender;

        totalSupply = INITIAL_AMOUNT;
    }
}
