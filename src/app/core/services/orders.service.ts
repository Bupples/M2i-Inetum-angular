import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;

  constructor() {

  }

  // get collection
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

  // change state

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id in collection
}
