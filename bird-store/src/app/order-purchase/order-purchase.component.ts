import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import CartService from '../cart.service';
import { ItemCart } from '../shared/item-cart.model';
import { Order } from '../shared/order.model';
import { OrderPurchaseService } from './order-purchase.service';

@Component({
  selector: 'app-order-purchase',
  templateUrl: './order-purchase.component.html',
  styleUrls: ['./order-purchase.component.css'],
  providers: [OrderPurchaseService]
})
export class OrderPurchaseComponent implements OnInit {
  public orderID: number;
  itemsCart: ItemCart[] = [];

  public form: FormGroup = new FormGroup({
    address: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120)
    ]),
    number: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20)
    ]),
    complement: new FormControl(null),
    paymentForm: new FormControl(null, [Validators.required])
  });

  constructor(
    private orderPurchaseService: OrderPurchaseService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.itemsCart = this.cartService.showItems();
    console.log('ngOnInit order-purchase:', this.itemsCart);
  }

  confirmPurchase(): void {
    if (this.form.status === 'INVALID') {
      this.form.get('address').markAsTouched();
      this.form.get('number').markAsTouched();
      this.form.get('complement').markAsTouched();
      this.form.get('paymentForm').markAsTouched();
    } else {
      if (this.cartService.showItems().length === 0) {
        alert('None item(s) selected!');
      } else {
        const order: Order = new Order(
          this.form.value.address,
          this.form.value.number,
          this.form.value.complement,
          this.form.value.paymentForm,
          this.cartService.showItems()
        );

        this.orderPurchaseService
          .makePurchase(order)
          .subscribe((orderID: number) => {
            console.log('Order', orderID);
            this.orderID = orderID;
            this.cartService.clearCart();
          });
      }
    }
  }

  increase(item: ItemCart): void {
    this.cartService.increase(item);
  }

  decrease(item: ItemCart): void {
    this.cartService.decrease(item);
  }
}
