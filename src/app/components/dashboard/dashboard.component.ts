import { Component, OnInit } from '@angular/core';
import { IStock } from '../../services/IStock';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: IStock[];
  symbols: string[];

  constructor(private stocksService: StocksService) {
    this.symbols = stocksService.get();
  }

  ngOnInit() {
    this.loadSymbols();
  }

  loadSymbols() {
    this.stocksService.load(this.symbols).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
