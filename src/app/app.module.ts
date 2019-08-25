import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CartService } from './services/cart-service/cart.service';
import { ProductService } from './services/product-service/product.service';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponentComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [
    CartService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
