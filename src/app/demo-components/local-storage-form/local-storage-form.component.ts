import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ValidateForm } from 'src/app/validation/validateForm';

@Component({
  selector: 'app-local-storage-form',
  templateUrl: './local-storage-form.component.html',
  styles: []
})
export class LocalStorageFormComponent implements OnInit {
  localStorageForm: FormGroup;
  @Output() localStorageFormValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createLocalStorageForm();
  }

  get localStorageKey(): AbstractControl {
    return this.localStorageForm.get('localStorageKey');
  }

  get localStorageValue(): AbstractControl {
    return this.localStorageForm.get('localStorageValue');
  }

  private createLocalStorageForm(): void {
    this.localStorageForm = this.formBuilder.group({
      localStorageKey: ['', Validators.required],
      localStorageValue: ['', Validators.required],
    });
  }

  addValueToLocalStorage(): void {
    if (this.localStorageForm.invalid) {
      ValidateForm.markFormAsTouched(this.localStorageForm);
      return;
    }
    const localStorageValue = this.localStorageForm.value;
    this.localStorageFormValue.emit(localStorageValue);

    this.localStorageForm.reset();
  }

}
