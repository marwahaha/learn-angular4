import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import CartService from "../cart.service";
import { OffersService } from "../offers.service";
import { Offer } from "../shared/offer.model";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.component.html",
  styleUrls: ["./offer.component.css"],
  providers: [OffersService]
})
export class OfferComponent implements OnInit {
  public offer: Offer;

  constructor(private route: ActivatedRoute, private offersService: OffersService, private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id: number = params.id;

      this.offersService
        .getOfferById(id)
        .then((offer: Offer) => {
          this.offer = offer;
        })
        .catch((reject: any) => {
          console.error("Error: ", reject);
        });
    });
  }

  public addToCart(): void {
    console.log('Offer to cart: ', this.offer);
    this.cartService.addItem(this.offer);
    console.log('itens', this.cartService.showItems());
  }
}
