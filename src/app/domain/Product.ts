export enum Category {
  vegetables = 'Vegetables',
  fruits = 'Fruits',
  chocolate = 'Chocolate',
  coffee = 'Coffee',
  noCategory = '',
}
export interface Product {
  name: string;
  description?: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}
