import { Component } from '@angular/core';
import { Web3Service } from './services/web-3/web-3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private web3: Web3Service) {}
}
