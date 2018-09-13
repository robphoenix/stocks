import { Component, Input, OnInit } from '@angular/core';
import { IStock } from '../../services/IStock';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input()
  stock: IStock;

  constructor() {}

  ngOnInit() {}

  isNegative() {
    return this.stock && this.stock.change < 0;
  }

  isPositive() {
    return this.stock && this.stock.change > 0;
  }
}
