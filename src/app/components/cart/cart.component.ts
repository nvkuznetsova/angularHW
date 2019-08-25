import { Component, OnInit, AfterContentChecked, OnDestroy, DoCheck } from '@angular/core';

import { Subscription } from 'rxjs';

import { Product } from 'src/app/domain/Product';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: Array<Product> = [];
  private items: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.boughtProducts.subscribe(product => {
      this.cartItems.push(product);
    });
  }

  ngOnDestroy() {
    this.items.unsubscribe();
  }
}
