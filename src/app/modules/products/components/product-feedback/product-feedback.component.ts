import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-feedback',
  templateUrl: './product-feedback.component.html',
  styles: []
})
export class ProductFeedbackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  close(): void {
    this.router.navigate([{outlets: {feedback: null}}]);
  }

}
