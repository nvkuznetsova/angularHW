import { Injectable } from '@angular/core';

import { ProductModel } from '../../models/ProductModel';
import { Category } from '../../domain/Product';

@Injectable()
export class ProductService {
  getProducts() {
    return [
      new ProductModel({
        name: 'apple',
        description: 'tasty',
        price: 1,
        category: Category.fruits,
        isAvailable: true,
      }),
      new ProductModel({
        name: 'orange',
        description: 'tasty',
        price: 1,
        category: Category.fruits,
        isAvailable: true,
      }),
      new ProductModel({
        name: 'salad',
        description: 'tasty',
        price: 2,
        category: Category.vegetables,
        isAvailable: true,
      }),
      new ProductModel({
        name: 'capuccino',
        description: 'tasty',
        price: 2,
        category: Category.coffee,
        isAvailable: true,
      }),
      new ProductModel({
        name: 'white chocolate',
        description: 'tasty',
        price: 2,
        category: Category.chocolate,
        isAvailable: true,
      }),
    ];
  }
}
