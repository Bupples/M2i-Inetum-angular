import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public listHeaders: string[];
  public collection: Order[];

  constructor(
    private route: ActivatedRoute,
    private os: OrdersService
  ) { }

  ngOnInit(): void {
    this.listHeaders = [
      "Type",
      "Client",
      "NbDay",
      "TjmHT",
      "TotalHT",
      "TotalTTC",
      "State"
    ];

    this.route.data.subscribe((param) => {

    });

    this.os.collection.subscribe((data) => {
      this.collection = data;
    });
  }

}
