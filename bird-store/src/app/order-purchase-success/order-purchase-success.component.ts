import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-purchase-success',
  templateUrl: './order-purchase-success.component.html'
})
export class OrderPurchaseSuccessComponent {
  @Input() public orderID: number;

  constructor() {}
}
