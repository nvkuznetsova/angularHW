import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'product/:id',
    component: ProductCardComponent,
  },
  {
    path: 'product-feedback',
    component: ProductFeedbackComponent,
    outlet: 'feedback',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})

export class ProductsRoutingModule {}
