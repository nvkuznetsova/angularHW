import { Component, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from 'src/app/modules/core/services/config-options-service/config-options.service';

const noOptionServ = 'No Provider for ConfigOptionsService';

@Component({
  selector: 'app-config-options',
  templateUrl: './config-options.component.html',
  styles: []
})
export class ConfigOptionsComponent implements OnInit {
  configOptions = {};
  noProviderForOptionsService = '';

  constructor( @Optional() private configOptionsService: ConfigOptionsService) { }

  ngOnInit() {
    if (!this.configOptionsService) {
      this.noProviderForOptionsService = noOptionServ;
    } else {
      this.configOptions = this.configOptionsService.getConfigOptions();
    }
  }

  setOptions(optionsFormValue: {login: string, email: string}): void {
    // const options = this.configOptionsForm.value;

    this.configOptionsService.setConfigOptopns(optionsFormValue.login, optionsFormValue.email);
    this.configOptions = this.configOptionsService.getConfigOptions();
  }

}
