import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-purchase',
  templateUrl: './order-purchase.component.html',
  styleUrls: ['./order-purchase.component.css']
})
export class OrderPurchaseComponent implements OnInit {
  adrress: string = ''
  number: number
  complement: string = ''
  paymentForm: string = ''

  constructor() { }

  ngOnInit() {
  }

  updateAdrress() { }

}
