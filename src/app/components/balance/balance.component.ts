import { Component, OnInit } from '@angular/core';
import { ButtcoinService } from '../../services/buttcoin/buttcoin.service';
import { Web3Service } from '../../services/web-3/web-3.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  balance$: Observable<number>;

  constructor(
    private buttcoinService: ButtcoinService,
    private web3Service: Web3Service
  ) { }

  ngOnInit() {
    this.balance$ = this.buttcoinService.balance$;
    this.buttcoinService.getBalance();
    // this.buttcoinService.getButtcoinCrowdsaleContract().then((thing) => {
    //   debugger;
    // });
  }

}
