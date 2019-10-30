import { Injectable } from '@angular/core';

import { CartItem } from 'src/app/domain/CartItem';

import { CoreModule } from '../../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class CartService {
  private cartItems: Array<CartItem> = [];

  constructor() {}

  getCartProducts(): Array<CartItem> {
    return this.cartItems = localStorage['cart-items'] ?
      JSON.parse(localStorage.getItem('cart-items')) : this.cartItems;
  }

  addProduct(item: CartItem) {
    this.cartItems = [...this.cartItems, item];
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
  }

  deleteProduct(cartItemId: number): void {
    this.cartItems = this.cartItems.filter(item => {
      return item.product.id !== cartItemId;
    });
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
  }

  addCartItem(cartItemId: number): void {
    const idx = this.findCartItemIdx(cartItemId);
    this.cartItems[idx].count += 1;
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
  }

  deleteCartItem(cartItemId: number): void {
    const idx = this.findCartItemIdx(cartItemId);
    this.cartItems[idx].count -= 1;
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
  }

  updateCart(): {totalSum: number, totalCount: number} {
    let sum = 0;
    let count = 0;
    this.cartItems.forEach(item => {
      sum += (item.count * item.product.price);
      count += item.count;
    });

    return {
      totalSum: sum,
      totalCount: count,
    };
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cart-items');
  }

  private findCartItemIdx(cartItemId: number): number {
    return this.cartItems.findIndex((item: CartItem) => {
      return item.product.id === cartItemId;
    });
  }
}
