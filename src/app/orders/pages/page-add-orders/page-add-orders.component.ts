import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-orders',
  templateUrl: './page-add-orders.component.html',
  styleUrls: ['./page-add-orders.component.scss']
})
export class PageAddOrdersComponent implements OnInit {
  public title: string;
  public item = new Order();

  constructor(
    private route: ActivatedRoute,
    private os: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
  }

  public add(item: Order): void {
    this.os.add(item).subscribe((res) => {
      // this.router.navigate(['orders']);
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

}
