import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CartItem } from 'src/app/domain/CartItem';

import { CartService } from 'src/app/modules/core/services/cart-service/cart.service';
import { OrderByPipe } from '../../../shared/pipes/order-by.pipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-items-list.component.html',
})
export class CartItemsListComponent implements OnInit {
  totalSum = 0;
  totalCount = 0;
  cartItems = [];
  private isAscSort = false;

  constructor(private cartService: CartService,
              private orderByPipe: OrderByPipe,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartProducts();
    this.updateCart();
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
    this.updateCart();
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

  makeOrder(): void {
    // resolve guard
    this.router.navigate(['order'], { relativeTo: this.activeRoute });
  }

  private updateCart(): void {
    const { totalSum, totalCount } = this.cartService.updateCart();
    this.totalSum = totalSum;
    this.totalCount = totalCount;
  }
}
