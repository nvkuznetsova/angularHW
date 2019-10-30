import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartItemsListComponent } from './components/cart-items-list/cart-items-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartItemsListComponent,
    OrderFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
  ],
})
export class CartModule { }
