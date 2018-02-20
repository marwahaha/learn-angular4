import { Component, OnInit } from "@angular/core";
import { OffersService } from "../offers.service";
import { Offer } from "../shared/offer.model";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "../utils/util.extension";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  providers: [OffersService]
})
export class HeaderComponent implements OnInit {
  private offersService: OffersService;
  private searchSubject: Subject<string> = new Subject<string>();
  public offers: Observable<Offer[]>;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
  }

  ngOnInit() {
    this.offers = this.searchSubject
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((term: string) => {
        if (term.trim() === "") {
          return Observable.of<Offer[]>([]);
        }
        return this.offersService.findOfferByTerm(term);
      })
      .catch((error: any) => {
        console.error("Error Observable: ", error);

        return Observable.of<Offer[]>([]);
      });

    this.offers.subscribe(
      (offers: Offer[]) => console.log("Offers: ", offers),
      (error: any) =>
        console.error("Error status: ", error.status, "Error details: ", error),
      () => console.log("Observable findOfferByTerm completed")
    );
  }

  public search(term: string): void {
    this.searchSubject.next(term);

    // this.offers = this.offersService.findOfferByTerm(term);
    // this.offers.subscribe(
    //   (offers: Offer[]) => console.log("Offers: ", offers),
    //   (error: any) =>
    //     console.error("Error status: ", error.status, "Error details: ", error),
    //   () => console.log("Observable findOfferByTerm completed")
    // );
  }

  public clearFilter(): void {
    this.searchSubject.next("");
  }
}
