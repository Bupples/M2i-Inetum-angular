import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddOrdersComponent } from './pages/page-add-orders/page-add-orders.component';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent, data: {title: 'List orders'} },
  { path: 'add', component: PageAddOrdersComponent, data: {title: 'Add orders'} },
  { path: 'edit/:id', component: PageEditOrdersComponent, data: {title: 'Edit orders'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
