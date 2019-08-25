import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/domain/Product';

import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  @Input() product: Product;
  // product = {
  //   name: 'apple',
  //   description: 'tasty',
  //   price: 1,
  //   category: 'fruits',
  //   isAvailable: true,
  // };

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(product) {
    this.cartService.addProduct(product);
  }

}
