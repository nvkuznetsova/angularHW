import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product-component/product-component.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';

import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    CartModule
  ],
  exports: [ProductsPageComponent]
})
export class ProductsModule { }
