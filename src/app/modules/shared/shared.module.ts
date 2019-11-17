import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighlightDirective } from './directives/highlight.directive';

import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  declarations: [
    HighlightDirective,
    FormInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HighlightDirective,
    FormInputComponent,
  ]
})
export class SharedModule { }
