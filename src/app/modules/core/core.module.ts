import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantsService } from './services/constants-service/constants.service';
import { GeneratorService, GenerateSequence } from './services/generator-service/generator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: { App: 'FoodShop', Ver: '1.0' } },
    { provide: GeneratorService, useFactory: GenerateSequence(8) }
  ],
})
export class CoreModule { }
