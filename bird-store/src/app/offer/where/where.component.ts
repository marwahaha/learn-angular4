import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OffersService } from "../../offers.service";

@Component({
  selector: "app-where",
  templateUrl: "./where.component.html",
  styleUrls: ["./where.component.css"],
  providers: [OffersService]
})
export class WhereComponent implements OnInit {
  private description: string;
  private route: ActivatedRoute;
  private offersService: OffersService;

  constructor(route: ActivatedRoute, offersService: OffersService) {
    this.route = route;
    this.offersService = offersService;
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      let idOffer = params.id;

      this.offersService
        .getOfferDescriptionsById(idOffer, "where")
        .then((description: string) => {
          this.description = description;
        })
        .catch((reject: any) => {
          console.error("Error: ", reject);
        });
    });
  }
}
