import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { CartItem } from 'src/app/domain/CartItem';
import { CanComponentDeactivate } from 'src/app/domain/CanComponentDeactivate';

import { DialogService } from 'src/app/modules/core/services/dialog/dialog.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styles: []
})
export class OrderFormComponent implements OnInit, CanComponentDeactivate {
  cartItems: Array<CartItem>;
  orderForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.createForm();
  }

  onGoBack(): void {
    this.router.navigateByUrl('/cart');
  }

  canDeactivate(): boolean | Observable<boolean> {
    const flags = Object.keys(this.orderForm.controls).map(key => {
      const control = this.orderForm.controls[key];
      if (control.touched || control.dirty ) {
        return false;
      }
      return true;
    });

    if (flags.every(item => item)) {
      return true;
    }

    return this.dialogService.confirm('All input data will be lost. Do you want to leave page?');
  }

  private createForm(): void {
    this.orderForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      email: ['', Validators.email],
      address: [''],
    });
  }

}
