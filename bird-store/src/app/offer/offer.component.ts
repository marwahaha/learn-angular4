import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
  private route: ActivatedRoute;
  private offersService: OffersService;

  constructor(route: ActivatedRoute, offersService: OffersService) {
    this.route = route;
    this.offersService = offersService;
  }

  ngOnInit() {
    let id: number = this.route.snapshot.params["id"];
    this.offersService
      .getOfferById(id)
      .then((offer: Offer) => {
        this.offer = offer;
      })
      .catch((reject: any) => {
        console.error("Error: ", reject);
      });
  }
}
