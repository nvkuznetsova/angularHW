import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ValidateForm } from 'src/app/validation/validateForm';

@Component({
  selector: 'app-config-options-form',
  templateUrl: './config-options-form.component.html',
  styles: []
})
export class ConfigOptionsFormComponent implements OnInit {
  configOptionsForm: FormGroup;
  @Output() configOptionsFormValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createOptionsForm();
  }

  get login(): AbstractControl {
    return this.configOptionsForm.get('login');
  }

  get email(): AbstractControl {
    return this.configOptionsForm.get('email');
  }

  setOptions(): void {
    if (this.configOptionsForm.invalid) {
      ValidateForm.markFormAsTouched(this.configOptionsForm);

      return;
    }
    const configOptionsValue = this.configOptionsForm.value;
    this.configOptionsFormValue.emit(configOptionsValue);

    this.configOptionsForm.reset();
  }

  private createOptionsForm(): void {
    this.configOptionsForm = this.formBuilder.group({
      login: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])],
    });
  }

}
