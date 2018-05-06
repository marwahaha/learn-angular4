import { ItemCart } from "./shared/item-cart.model";
import { Offer } from "./shared/offer.model";

export default class CartService {

  public items: ItemCart[] = [];

  constructor() { }

  showItems(): ItemCart[] {
    return this.items;
  }

  addItem(item: Offer) {
    const dataItemCart = new ItemCart(item.id, item.images[0], item.title, item.description, item.value, 1);

    const existsItemCart = this.existsItem(item);
    if (!!existsItemCart) {
      existsItemCart.quantity += 1;
    } else {
      this.items.push(dataItemCart);
    }
  }

  existsItem(item: Offer | ItemCart) {
    return this.items.find((currentItem: ItemCart) => currentItem.id === item.id);
  }

  getTotalCartItems(): number {
    let total: number = 0;

    this.items.map((item: ItemCart) => {
      total += item.quantity * item.value;
    });

    return Number(total.toFixed(2));
  }

  decrease(item: ItemCart): void {
    let selectedItem = this.existsItem(item);

    if (!!selectedItem) {
      selectedItem.quantity -= 1;

      if (selectedItem.quantity === 0) {
        this.items.splice(this.items.indexOf(selectedItem), 1);
      }
    }
  }
  increase(item: ItemCart): void {
    let selectedItem = this.existsItem(item);

    if (!!selectedItem) {
      selectedItem.quantity += 1;
    }
  }
}