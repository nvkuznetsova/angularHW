export enum Category {
  vegetables = 'Vegetables',
  fruits = 'Fruits',
  sweets = 'Sweets',
  coffee = 'Coffee',
  noCategory = '',
}
export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}
