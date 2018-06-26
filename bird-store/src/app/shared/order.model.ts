import { ItemCart } from './item-cart.model';

export class Order {
  constructor(
    public address: string,
    public number: string,
    public complement: string,
    public paymentForm: string,
    public items: Array<ItemCart>
  ) {}
}
