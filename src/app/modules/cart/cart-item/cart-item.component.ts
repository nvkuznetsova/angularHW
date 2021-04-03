import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { CartItem } from 'src/app/domain/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() addItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  onAddItem(): void {
    this.addItem.emit(this.cartItem.product.id);
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem);
  }

  onDeleteProduct(): void {
    this.deleteProduct.emit(this.cartItem.product.id);
  }
}
