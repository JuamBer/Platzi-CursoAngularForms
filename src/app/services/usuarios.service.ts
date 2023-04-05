import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor() {}

  checkEmail(email: string) {
    var simulatedResponse = {
      isAvailable: Math.random() < 0.5,
    };

    return of(simulatedResponse);
  }
}
