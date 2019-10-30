import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { CoreModule } from '../../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(res => this.isLoggedIn = res),
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
