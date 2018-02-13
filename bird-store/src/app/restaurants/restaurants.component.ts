import { Component, OnInit } from "@angular/core";
import { OffersService } from "../offers.service";
import { Offer } from "../shared/offer.model";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.css"],
  providers: [OffersService]
})
export class RestaurantsComponent implements OnInit {
  private offers: Array<Offer>;

  constructor(private offersServices: OffersService) {}

  ngOnInit() {
    this.offersServices
      .getOffers("?category=restaurants")
      .then((offers: Array<Offer>) => {
        this.offers = offers;
        console.log(this.offers);
      })
      .catch((reject: any) => {
        console.error("Error: ", reject);
      });
  }
}
