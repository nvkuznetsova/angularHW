import { FormGroup } from '@angular/forms';

export class ValidateForm {
  static markFormAsTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls)
            .map(key => formGroup.controls[key])
            .forEach(control => control.markAsTouched());
  }
}
