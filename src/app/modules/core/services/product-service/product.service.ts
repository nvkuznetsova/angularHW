import { Injectable } from '@angular/core';

import { ProductModel } from '../../../../models/ProductModel';
import { Category, Product } from '../../../../domain/Product';

import { CoreModule } from '../../core.module';

const products = [
  new ProductModel({
    id: 1,
    name: 'apple',
    description: 'tasty',
    price: 1,
    category: Category.fruits,
    isAvailable: true,
  }),
  new ProductModel({
    id: 2,
    name: 'orange',
    description: 'tasty nutritious',
    price: 1,
    category: Category.fruits,
    isAvailable: true,
  }),
  new ProductModel({
    id: 3,
    name: 'salad',
    description: 'tasty',
    price: 2,
    category: Category.vegetables,
    isAvailable: true,
  }),
  new ProductModel({
    id: 4,
    name: 'capuccino',
    description: 'tasty',
    price: 2,
    category: Category.coffee,
    isAvailable: true,
  }),
  new ProductModel({
    id: 5,
    name: 'chocolate',
    description: 'tasty',
    price: 2,
    category: Category.sweets,
    isAvailable: true,
  }),
  new ProductModel({
    id: 6,
    name: 'banana',
    description: 'tasty',
    price: 2,
    category: Category.fruits,
    isAvailable: false,
  }),
  new ProductModel({
    id: 7,
    name: 'tomato',
    description: 'tasty',
    price: 1.5,
    category: Category.vegetables,
    isAvailable: true,
  }),
  new ProductModel({
    id: 8,
    name: 'latte',
    description: 'tasty',
    price: 1.5,
    category: Category.coffee,
    isAvailable: true,
  }),
];

@Injectable({
  providedIn: CoreModule,
})
export class ProductService {
  getProducts(): Promise<Array<Product>> {
    return new Promise(resolve => resolve(products));
  }

  getProduct(id: number): Promise<Product> {
    const product =  products.find((prod: Product) => {
      return prod.id === +id;
    });
    return new Promise(resolve => resolve(product));
  }
}
