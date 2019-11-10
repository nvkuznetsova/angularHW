import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { CanComponentDeactivate } from 'src/app/domain/CanComponentDeactivate';

@Injectable({
  providedIn: CoreModule,
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean > | Promise<boolean> {
    return component.canDeactivate();
  }

}
