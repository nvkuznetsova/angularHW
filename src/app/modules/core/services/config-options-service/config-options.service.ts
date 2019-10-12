import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class ConfigOptionsService {

  private configOptions = {
    id: 1234,
    login: 'user1234',
    email: 'someemail@mail.ru',
  };

  constructor() { }

  setConfigOptopns(login: string, email: string): void {
    const id = Math.floor(Math.random() * 10000);
    this.configOptions = {
      id,
      login,
      email,
    };
  }

  getConfigOptions(): {id: number, login: string, email: string} {
    return this.configOptions;
  }
}
