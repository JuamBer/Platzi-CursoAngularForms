import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

export class AppValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    if (value > 10000) {
      return { price_invalid: true };
    }
    return null;
  }

  static validPassword(control: AbstractControl) {
    const value = control.value;
    if (!containsNumber(value)) {
      return { invalid_password: true };
    }
    return null;
  }

  static matchPasswords(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { match_password: true };
    }
    return null;
  }

  static validateEmail(service: UsuariosService) {
    return (control: AbstractControl) => {
      const value = control.value;
      return service.checkEmail(value).pipe(
        map((response: any) => {
          const isAvailable = response.isAvailable;
          if (!isAvailable) {
            return { not_available: true };
          }
          return null;
        })
      );
    };
  }
}

function containsNumber(value: string) {
  return value.split('').find((v) => isNumber(v)) !== undefined;
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}
