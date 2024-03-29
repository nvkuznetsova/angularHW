import { Category, Product } from '../domain/Product';

export class ProductModel implements Product {
  id = 0;
  name = '';
  description = '';
  price = 0;
  category: Category = Category.noCategory;
  isAvailable = true;

  constructor(product: Product) {
    Object.assign(this, product);
  }

  getPrice() {
    return this.price;
  }
}
