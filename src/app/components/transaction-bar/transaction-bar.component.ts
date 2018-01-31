import { Component, OnInit } from '@angular/core';
import { Web3Service } from './../../services/web-3/web-3.service';
import { ButtcoinService } from './../../services/buttcoin/buttcoin.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-transaction-bar',
  templateUrl: './transaction-bar.component.html',
  styleUrls: ['./transaction-bar.component.scss']
})
export class TransactionBarComponent implements OnInit {

  isDepositing: boolean = false;
  isWithdrawing: boolean = false;
  withdrawalAddress: string = '';
  withdrawalAmount: number = 0;
  address$: Observable<string>;

  constructor(
    private web3Service: Web3Service,
    private buttcoinService: ButtcoinService
  ) {
    this.address$ = this.web3Service.address$;
    this.web3Service.getAddress();
  }

  ngOnInit() {
  }

  transfer() {
    this.buttcoinService.transfer(
      this.withdrawalAddress,
      this.withdrawalAmount
    );
  }

  toggleDeposit() {
    this.isWithdrawing = false;
    this.isDepositing = !this.isDepositing;
  }

  toggleWithdraw() {
    this.isDepositing = false;
    this.isWithdrawing = !this.isWithdrawing;
  }

}
