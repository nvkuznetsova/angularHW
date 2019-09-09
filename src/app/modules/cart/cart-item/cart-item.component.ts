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

  constructor() { }

  ngOnInit() {}

  onAddItem(): void {
    this.cartItem.count += 1;
    this.addItem.emit(this.cartItem.product.price);
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem);
  }

}
