import { Component } from '@angular/core';
import { IStock } from './services/IStock';
import { StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stocks';
  stocks: IStock[];

  constructor(private stocksService: StocksService) {
    stocksService.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
