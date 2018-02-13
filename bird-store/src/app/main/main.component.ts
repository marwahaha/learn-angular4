import { Component, OnInit } from "@angular/core";
import { OffersService } from "../offers.service";
import { Offer } from "../shared/offer.model";
import { reject } from "q";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  providers: [OffersService]
})
export class MainComponent implements OnInit {
  private offers: Array<Offer>;

  constructor(private offersServices: OffersService) {}

  ngOnInit() {
    this.offersServices
      .getOffers("?featured=true")
      .then((offers: Array<Offer>) => {
        this.offers = offers;
      })
      .catch((reject: any) => {
        console.error("Error: ", reject);
      });
  }
}
