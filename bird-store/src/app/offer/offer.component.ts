import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
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
}
