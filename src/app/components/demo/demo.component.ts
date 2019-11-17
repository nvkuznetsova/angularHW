import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ConstantsService, Constant } from 'src/app/modules/core/services/constants-service/constants.service';
import { GeneratorService } from 'src/app/modules/core/services/generator-service/generator.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {
  constant = {};
  sequence = '';

  constructor(
    @Optional() @Inject(ConstantsService) public constantsService: Constant,
    @Optional() @Inject(GeneratorService) private generatorService: string,
  ) { }

  ngOnInit() {
    this.constant = this.constantsService ? this.constantsService : { App: '', Ver: ''};
    this.sequence = this.generatorService ? this.generatorService : '';
  }

}
