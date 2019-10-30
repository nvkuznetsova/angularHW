import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartService } from 'src/app/modules/core/services/cart-service/cart.service';
import { ProductService } from 'src/app/modules/core/services/product-service/product.service';

import { Product } from 'src/app/domain/Product';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/domain/CartItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Promise<Array<Product>>;
  private items: Subscription;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onBuy(product: Product): void {
    const cartItem: CartItem = {
      product,
      count: 1,
    };
    if (!this.isItemExists(cartItem)) {
      this.cartService.addProduct(cartItem);
    } else {
      this.cartService.addCartItem(product.id);
    }
  }

  onDetailsClick(product: Product): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }

  private isItemExists(item: CartItem): boolean {
    return this.cartService.getCartProducts().some((cartItem: CartItem) => {
      return item.product.id === cartItem.product.id;
    });
  }
}
