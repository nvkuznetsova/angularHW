import { InjectionToken } from '@angular/core';

export interface Constant {
  App: string;
  Ver: string;
}

export const ConstantsService = new InjectionToken<Constant>('constantsService');

