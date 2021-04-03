import { Component, OnInit, Optional } from '@angular/core';
import { LocalStorageService } from 'src/app/modules/core/services/local-stogage-service/local-storage.service';

const noLocalStorServ = 'No Provider for LocalStorageService';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styles: []
})
export class LocalStorageComponent implements OnInit {
  storageItems = [];
  noProviderForLocalStorage = '';

  constructor(@Optional() private localStorageService: LocalStorageService) { }

  ngOnInit() {
    if (!this.localStorageService) {
      this.noProviderForLocalStorage = noLocalStorServ;
    } else {
      this.getLocalStorageItems();
    }
  }

  addValueToLocalStorage(formData: {localStorageKey: string, localStorageValue: string}): void {
    this.localStorageService.setItem(formData.localStorageKey, formData.localStorageValue);
    this.getLocalStorageItems();
  }

  getLocalStorageItems(): void {
    this.storageItems = this.localStorageService.getItems();
  }

  removeLocalStorageValue(key: string): void {
    this.localStorageService.removeItem(key);
    this.getLocalStorageItems();
  }

}
