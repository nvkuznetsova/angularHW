import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() inputLabelText: string;
  @Input() inputId: string;
  @Input() inputType: string;
  @Input() inputControl: AbstractControl;

  constructor() { }

  ngOnInit() { }

}
