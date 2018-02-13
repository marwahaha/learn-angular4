import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { Offer } from "./shared/offer.model";
import { URL_API } from "./app.api";

@Injectable()
export class OffersService {
  constructor(private http: Http) {}

  public getOffers(category: String = "?"): Promise<Offer[]> {
    return this.http
      .get(`${URL_API}${category}`)
      .toPromise()
      .then((response: any) => response.json());
  }

  public getOfferById(id: number): Promise<Offer> {
    return this.http
      .get(`${URL_API}/${id}`)
      .toPromise()
      .then((response: any) => response.json());
  }
}
