import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Offer } from "./shared/offer.model";
import { URL_API } from "./app.api";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/retry";

@Injectable()
export class OffersService {
  constructor(private http: Http) { }

  public getOffers(category: string = "?"): Promise<Offer[]> {
    return this.http
      .get(`${URL_API}offers${category}`)
      .toPromise()
      .then((response: Response) => response.json());
  }

  public getOfferById(id: number): Promise<Offer> {
    return this.http
      .get(`${URL_API}offers/${id}`)
      .toPromise()
      .then((response: Response) => response.json());
  }

  public getOfferDescriptionsById(
    id: number,
    description: string
  ): Promise<string> {
    return this.http
      .get(`${URL_API}${description}/${id}`)
      .toPromise()
      .then((response: Response) => response.json().description);
  }

  public findOfferByTerm(term: string): Observable<Offer[]> {
    return this.http
      .get(`${URL_API}offers?description_like=${term}`)
      .retry(10)
      .map((response: Response) => response.json());
  }
}
