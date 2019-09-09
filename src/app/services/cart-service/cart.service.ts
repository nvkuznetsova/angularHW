import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Product } from 'src/app/domain/Product';

@Injectable()
export class CartService {
  constructor() {}

  private products = new Subject<Product>();
  boughtProducts = this.products.asObservable();

  addProduct(product: Product): void {
    this.products.next(product);
  }
}
