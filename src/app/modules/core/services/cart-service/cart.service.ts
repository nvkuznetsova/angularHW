import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Product } from 'src/app/domain/Product';
import { CartItem } from 'src/app/domain/CartItem';

import { CoreModule } from '../../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class CartService {
  private cartItems: Array<CartItem> = [];
  private totalCartSum = 0;
  private totalGoodsCount = 0;
  private products = new Subject<Product>();
  boughtProducts = this.products.asObservable();

  constructor() {}

  setCartProducts(item: CartItem) {
    this.cartItems = [...this.cartItems, item];
  }

  getCartProducts(): Array<CartItem> {
    return this.cartItems;
  }

  addProduct(product: Product): void {
    this.products.next(product);
  }

  deleteProduct(cartItemId: number): void {
    this.cartItems = this.cartItems.filter(item => {
      return item.product.id !== cartItemId;
    });
  }

  addCartItem(cartItemId: number): void {
    const idx = this.findCartItemIdx(cartItemId);
    this.cartItems[idx].count += 1;
  }

  deleteCartItem(cartItemId: number): void {
    const idx = this.findCartItemIdx(cartItemId);
    this.cartItems[idx].count -= 1;
  }

  updateCart(): {totalSum: number, totalCount: number} {
    let sum = 0;
    let count = 0;
    this.cartItems.forEach(item => {
      sum += (item.count * item.product.price);
      count += item.count;
    });

    return {
      totalSum: this.totalCartSum = sum,
      totalCount: this.totalGoodsCount = count,
    };
  }

  clearCart(): void {
    this.cartItems = [];
  }

  private findCartItemIdx(cartItemId: number): number {
    return this.cartItems.findIndex((item: CartItem) => {
      return item.product.id === cartItemId;
    });
  }
}
