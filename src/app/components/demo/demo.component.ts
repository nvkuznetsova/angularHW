import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ConfigOptionsService } from 'src/app/modules/core/services/config-options-service/config-options.service';
import { LocalStorageService } from 'src/app/modules/core/services/local-stogage-service/local-storage.service';
import { ConstantsService, Constant } from 'src/app/modules/core/services/constants-service/constants.service';
import { GeneratorService } from 'src/app/modules/core/services/generator-service/generator.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {
  constant = {};
  storageValues = [];
  configOptions = {};
  sequence = '';
  localStorageForm: FormGroup;
  configOptionsForm: FormGroup;
  noProviderForLocalStorage = '';
  noProviderForOptionsService = '';

  constructor(
    @Optional() @Inject(ConstantsService) public constantsService: Constant,
    @Optional() @Inject(GeneratorService) private generatorService: string,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    if (!this.localStorageService) {
      this.noProviderForLocalStorage = 'No Provider for LocalStorageService';
    } else {
      this.createLocalStorageForm();
      this.getLocalStorageItems();
    }

    if (!this.configOptionsService) {
      this.noProviderForOptionsService = 'No Provider for ConfigOptionsService';
    } else {
      this.createOptionsForm();
      this.configOptions = this.configOptionsService.getConfigOptions();
    }
    this.constant = this.constantsService ? this.constantsService : { App: '', Ver: ''};
    this.sequence = this.generatorService ? this.generatorService : '';
  }

  addValueToLocalStorage(): void {
    const localStorageValue = this.localStorageForm.value;

    this.localStorageService.setItem(localStorageValue.key, localStorageValue.value);
    this.localStorageForm.reset();
    this.getLocalStorageItems();
  }

  getLocalStorageItems(): void {
    this.storageValues = [];
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        const storageValue = this.localStorageService.getItem(key);
        this.storageValues.push({ key, value: storageValue});
      }
    }
  }

  removeLocalStorageValue(key: string): void {
    this.localStorageService.removeItem(key);
    this.getLocalStorageItems();
  }

  setOptions(): void {
    const options = this.configOptionsForm.value;

    this.configOptionsService.setConfigOptopns(options.login, options.email);
    this.configOptions = this.configOptionsService.getConfigOptions();
  }

  private createLocalStorageForm(): void {
    this.localStorageForm = this.formBuilder.group({
      key: '',
      value: '',
    });
  }

  private createOptionsForm(): void {
    this.configOptionsForm = this.formBuilder.group({
      login: '',
      email: '',
    });
  }

}
