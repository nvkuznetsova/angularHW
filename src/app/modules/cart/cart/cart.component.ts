import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartItem } from 'src/app/domain/CartItem';
import { CartService } from 'src/app/modules/core/services/cart-service/cart.service';
import { Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
  totalSum = 0;
  totalCount = 0;
  cartItems = [];
  private items: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.boughtProducts.subscribe((product: Product) => {
      const cartItem: CartItem = {
        product,
        count: 1,
      };
      if (!this.isItemExists(cartItem)) {
        this.cartService.setCartProducts(cartItem);
      } else {
        this.cartService.addCartItem(product.id);
      }
      this.cartItems = this.cartService.getCartProducts();
      const { totalSum, totalCount } = this.cartService.updateCart();
      this.totalSum = totalSum;
      this.totalCount = totalCount;
    });
  }

  ngOnDestroy(): void {
    this.items.unsubscribe();
  }

  addCartItem(cartItemId: number): void {
    this.cartService.addCartItem(cartItemId);
    const { totalSum, totalCount } = this.cartService.updateCart();
    this.totalSum = totalSum;
    this.totalCount = totalCount;
  }

  deleteCartItem(cartItem: CartItem): void {
    if (cartItem.count === 1) {
      this.deleteProduct(cartItem.product.id);
      return;
    }
    this.cartService.deleteCartItem(cartItem.product.id);
    const { totalSum, totalCount } = this.cartService.updateCart();
    this.totalSum = totalSum;
    this.totalCount = totalCount;
  }

  deleteProduct(cartItemId: number): void {
    this.cartService.deleteProduct(cartItemId);
    this.cartItems = this.cartService.getCartProducts();
    const { totalSum, totalCount } = this.cartService.updateCart();
    this.totalSum = totalSum;
    this.totalCount = totalCount;
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartProducts();
    const { totalSum, totalCount } = this.cartService.updateCart();
    this.totalSum = totalSum;
    this.totalCount = totalCount;
  }

  private isItemExists(item: CartItem): boolean {
    return this.cartService.getCartProducts().some((cartItem: CartItem) => {
      return item.product.id === cartItem.product.id;
    });
  }
}
