import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartItem } from 'src/app/domain/CartItem';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: Array<CartItem> = [];
  total = 0;
  private items: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.boughtProducts.subscribe((product: Product) => {
      const cartItem: CartItem = {
        product,
        count: 1,
      };
      if (!this.isItemExists(cartItem)) {
        this.cartItems.push(cartItem);
      } else {
        const idx = this.cartItems.findIndex((item: CartItem) => {
          return item.product.name === product.name;
        });
        this.cartItems[idx].count += 1;
      }
      this.total += product.price;
    });
  }

  ngOnDestroy(): void {
    this.items.unsubscribe();
  }

  addCartItem(price: number): void {
    this.total += price;
  }

  deleteCartItem(cartItem: CartItem): void {
    this.total -= (cartItem.count * cartItem.product.price);
    this.cartItems = this.cartItems.filter(item => {
      return item.product.name !== cartItem.product.name;
    });
  }

  isItemExists(item: CartItem): boolean {
    return this.cartItems.some((cartItem: CartItem) => {
      return item.product.name === cartItem.product.name;
    });
  }
}
