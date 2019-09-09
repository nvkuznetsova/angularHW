import { Injectable } from '@angular/core';

import { ProductModel } from '../../models/ProductModel';
import { Category, Product } from '../../domain/Product';

const products = [
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
    name: 'chocolate',
    description: 'tasty',
    price: 2,
    category: Category.sweets,
    isAvailable: true,
  }),
  new ProductModel({
    name: 'banana',
    description: 'tasty',
    price: 2,
    category: Category.fruits,
    isAvailable: false,
  }),
  new ProductModel({
    name: 'tomato',
    description: 'tasty',
    price: 1.5,
    category: Category.vegetables,
    isAvailable: true,
  }),
  new ProductModel({
    name: 'latte',
    description: 'tasty',
    price: 1.5,
    category: Category.coffee,
    isAvailable: true,
  }),
];

@Injectable()
export class ProductService {
  getProducts(): Array<Product> {
    return products;
  }
}
