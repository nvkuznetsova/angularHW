import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartItem } from 'src/app/domain/CartItem';
import { Product } from 'src/app/domain/Product';

import { CartService } from 'src/app/modules/core/services/cart-service/cart.service';
import { OrderByPipe } from '../../shared/pipes/order-by.pipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
  totalSum = 0;
  totalCount = 0;
  cartItems = [];
  private items: Subscription;
  private isAscSort = false;

  constructor(private cartService: CartService,
              private orderByPipe: OrderByPipe) { }

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
      this.updateCart();
    });
  }

  ngOnDestroy(): void {
    this.items.unsubscribe();
  }

  addCartItem(cartItemId: number): void {
    this.cartService.addCartItem(cartItemId);
    this.updateCart();
  }

  deleteCartItem(cartItem: CartItem): void {
    if (cartItem.count === 1) {
      this.deleteProduct(cartItem.product.id);
      return;
    }
    this.cartService.deleteCartItem(cartItem.product.id);
    this.updateCart();
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
    this.updateCart();
  }

  sort(field: string): void {
    this.isAscSort = !this.isAscSort;
    this.cartItems = this.orderByPipe.transform(this.cartItems, field, this.isAscSort);
  }

  private updateCart(): void {
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
