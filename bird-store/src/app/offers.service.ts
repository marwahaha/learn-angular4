import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { Offer } from "./shared/offer.model";

const url = "http://localhost:3000/offers";

@Injectable()
export class OffersService {
  constructor(private http: Http) {}

  public getOffers(): Promise<Offer[]> {
    return this.http
      .get(url)
      .toPromise()
      .then((response: any) => response.json());
  }
}
