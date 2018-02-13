import { Component, OnInit } from "@angular/core";
import { OffersService } from "../offers.service";
import { Offer } from "../shared/offer.model";

@Component({
  selector: "app-diversion",
  templateUrl: "./diversion.component.html",
  styleUrls: ["./diversion.component.css"],
  providers: [OffersService]
})
export class DiversionComponent implements OnInit {
  private offers: Array<Offer>;

  constructor(private offersServices: OffersService) {}

  ngOnInit() {
    this.offersServices
      .getOffers("?category=diversion")
      .then((offers: Array<Offer>) => {
        this.offers = offers;
        console.log(this.offers);
      })
      .catch((reject: any) => {
        console.error("Error: ", reject);
      });
  }
}
