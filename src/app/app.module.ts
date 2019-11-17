import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsPageComponent } from './modules/products/components/products-page/products-page.component';

import { ProductsModule } from './modules/products/products.module';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';

import { LocalStorageFormComponent } from './demo-components/local-storage-form/local-storage-form.component';
import { ConfigOptionsFormComponent } from './demo-components/config-options-form/config-options-form.component';
import { LocalStorageComponent } from './demo-components/local-storage/local-storage.component';
import { ConfigOptionsComponent } from './demo-components/config-options/config-options.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: '', component: ProductsPageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DemoComponent,
    LocalStorageFormComponent,
    ConfigOptionsFormComponent,
    LocalStorageComponent,
    ConfigOptionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ProductsModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
