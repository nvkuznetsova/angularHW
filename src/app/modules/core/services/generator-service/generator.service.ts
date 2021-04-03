import { InjectionToken } from '@angular/core';

export const GeneratorService = new InjectionToken<string>('generatorService');

export const GenerateSequence = (n: number) => {
  const rand = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  return (): string => {
    return Array.from(Array(n)).map(() => {
      return rand[Math.floor(Math.random() * (rand.length - 1))];
    }).join('');
  };
};
