import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { CartItemsListComponent } from './components/cart-items-list/cart-items-list.component';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: 'order',
        component: OrderFormComponent,
        canDeactivate: [CanDeactivateGuard],
      },
      {
        path: '',
        component: CartItemsListComponent,
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})

export class CartRoutingModule {}
