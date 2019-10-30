import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';

import { AdminPageComponent } from './admin-page.component';
import { GoodsComponent } from './components/goods/goods.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: '',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'goods', component: GoodsComponent },
          { path: 'orders', component: OrdersComponent },
        ],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
