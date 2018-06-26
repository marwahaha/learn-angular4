import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL_API } from '../app.api';
import { Order } from '../shared/order.model';

@Injectable()
export class OrderPurchaseService {
  constructor(private http: Http) {}

  public makePurchase(order: Order): Observable<number> {
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http
      .post(
        `${URL_API}orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers })
      )
      .map((resposta: Response) => resposta.json().id);
  }
}
