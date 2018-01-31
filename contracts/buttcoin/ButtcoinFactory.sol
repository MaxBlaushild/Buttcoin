
pragma solidity ^0.4.13;

import './Buttcoin.sol';
import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';


contract ButtcoinFactory is Crowdsale {

  MintableToken public buttcoin;

  function ButtcoinFactory(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet)
    Crowdsale(_startTime, _endTime, _rate, _wallet) {
  }

  function createTokenContract() internal returns (MintableToken) {
    buttcoin = new Buttcoin();
    return buttcoin;
  }

}
