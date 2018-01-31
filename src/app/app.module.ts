import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Web3Service } from './services/web-3/web-3.service';
import { ButtcoinService } from './services/buttcoin/buttcoin.service';
import { BalanceComponent } from './components/balance/balance.component';
import { TransactionBarComponent } from './components/transaction-bar/transaction-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    TransactionBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    Web3Service,
    ButtcoinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
