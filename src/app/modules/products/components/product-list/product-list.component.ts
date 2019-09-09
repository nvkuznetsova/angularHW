import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart-service/cart.service';
import { ProductService } from 'src/app/services/product-service/product.service';

import { Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Array<Product>;

  constructor(private productService: ProductService,
              private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onBuy(product: Product): void {
    this.cartService.addProduct(product);
  }

}
