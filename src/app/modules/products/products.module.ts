import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product-component/product-component.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';

import { CartModule } from '../cart/cart.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductFeedbackComponent,
  ],
  imports: [
    CommonModule,
    CartModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule { }
