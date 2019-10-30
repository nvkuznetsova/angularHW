import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Product } from 'src/app/domain/Product';

import { CartService } from 'src/app/modules/core/services/cart-service/cart.service';
import { ProductService } from 'src/app/modules/core/services/product-service/product.service';

import { CartItem } from 'src/app/domain/CartItem';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: []
})
export class ProductCardComponent implements OnInit {
  product: Product;
  isLoading = true;

  constructor(
     private router: Router,
     private activeRoute: ActivatedRoute,
     private productsService: ProductService,
     private cartService: CartService,
     ) { }

  ngOnInit() {
    this.activeRoute.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.productsService.getProduct(+params.get('id'))),
    )
    .subscribe((product: Product) => {
      this.product = product;
      this.isLoading = false;
    });
  }

  onBuy(): void {
    const cartItem: CartItem = {
      product: this.product,
      count: 1,
    };
    if (!this.isItemExists(cartItem)) {
      this.cartService.addProduct(cartItem);
    } else {
      this.cartService.addCartItem(this.product.id);
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/products');
  }

  showFeedback(): void {
    this.router.navigateByUrl(`/product/${this.product.id}(feedback:product-feedback)`);
  }

  private isItemExists(item: CartItem): boolean {
    return this.cartService.getCartProducts().some((cartItem: CartItem) => {
      return item.product.id === cartItem.product.id;
    });
  }

}
