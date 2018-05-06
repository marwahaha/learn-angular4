import { Component, OnInit } from '@angular/core';
import CartService from '../cart.service';
import { ItemCart } from '../shared/item-cart.model';

@Component({
  selector: 'app-order-purchase',
  templateUrl: './order-purchase.component.html',
  styleUrls: ['./order-purchase.component.css'],
})
export class OrderPurchaseComponent implements OnInit {
  adrress: string = ''
  number: number
  complement: string = ''
  paymentForm: string = ''

  itemsCart: ItemCart[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.itemsCart = this.cartService.showItems();
    console.log('ngOnInit order-purchase:', this.itemsCart);
  }

  updateAdrress() { }

  increase(item: ItemCart): void {
    this.cartService.increase(item);
  }

  decrease(item: ItemCart): void {
    this.cartService.decrease(item);
  }

}
