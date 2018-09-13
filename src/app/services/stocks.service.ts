import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStock } from './IStock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  stocks: string[] = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
  url = `https://angular2-in-action-api.herokuapp.com`;

  constructor(private http: HttpClient) {}

  get(): string[] {
    return this.stocks;
  }

  add(stock: string): string[] {
    this.stocks.push(stock);
    return this.get();
  }

  remove(stock: string): string[] {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: string[]): Observable<IStock[]> {
    if (symbols) {
      return this.http.get<IStock[]>(
        `${this.url}/stocks/snapshot?symbols=${symbols.join()}`
      );
    }
  }
}
