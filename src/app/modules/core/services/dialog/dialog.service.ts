import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CoreModule } from '../../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class DialogService {

  constructor() { }

  confirm(message: string): Observable<boolean> {
    const confirmation = window.confirm(message);
    return of(confirmation);
  }
}
