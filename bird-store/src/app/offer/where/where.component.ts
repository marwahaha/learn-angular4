import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OffersService } from "../../offers.service";

@Component({
  selector: "app-where",
  templateUrl: "./where.component.html",
  styleUrls: ["./where.component.css"],
  providers: [OffersService]
})
export class WhereComponent implements OnInit {
  private description: String;
  private route: ActivatedRoute;
  private offersService: OffersService;

  constructor(route: ActivatedRoute, offersService: OffersService) {
    this.route = route;
    this.offersService = offersService;
  }

  ngOnInit() {
    let idOffer = this.route.parent.snapshot.params["id"];

    this.offersService
      .getOfferDescriptionsById(idOffer, "where")
      .then((description: String) => {
        this.description = description;
      })
      .catch((reject: any) => {
        console.error("Error: ", reject);
      });
  }
}
