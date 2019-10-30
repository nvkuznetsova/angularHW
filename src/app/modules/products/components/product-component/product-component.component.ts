import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() buyProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() seeDetails: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {}

  onBuy(): void {
    this.buyProduct.emit(this.product);
  }

  onDetailsClick(): void {
    this.seeDetails.emit(this.product);
  }
}
