import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-orders',
  templateUrl: './page-edit-orders.component.html',
  styleUrls: ['./page-edit-orders.component.scss']
})
export class PageEditOrdersComponent implements OnInit {
  public title: string;
  public item: Order;
  public item$: Observable<Order>;

  constructor(
    private route: ActivatedRoute,
    private os: OrdersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
    this.item$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const selectedId = params.get('id');
        return this.os.getItemById(selectedId);
      })
    )
  }

  public edit(item: Order): void {
    this.os.update(item).subscribe((res) => {
      this.router.navigate(['orders']);
    })
  }

}
