import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
