import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AppValidators } from 'src/app/validators/app-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router // private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  register(event: Event) {
    event.preventDefault();
    // if (this.form.valid) {
    //   const value = this.form.value;
    //   this.authService.createUser(value.email, value.password).then(() => {
    //     this.router.navigate(['/auth/login']);
    //   });
    // }
  }

  private buildForm() {
    this.form = this.formBuilder.group(
      {
        email: [
          '',
          [Validators.required],
          [AppValidators.validateEmail(this.usuariosService)],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            AppValidators.validPassword,
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        type: ['company', [Validators.required]],
        companyName: ['', [Validators.required]],
      },
      {
        validators: AppValidators.matchPasswords,
      }
    );

    this.typeField?.valueChanges.subscribe((value) => {
      if (value === 'company') {
        this.companyNameField?.setValidators([Validators.required]);
      } else {
        this.companyNameField?.setValidators(null);
      }
      this.companyNameField?.updateValueAndValidity();
    });
  }

  get typeField() {
    return this.form.get('type');
  }

  get companyNameField() {
    return this.form.get('companyName');
  }
}
