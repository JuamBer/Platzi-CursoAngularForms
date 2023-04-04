import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  form!: FormGroup;

  categories: string[] = ['cat-1', 'cat-2', 'cat-3', 'cat-4', 'cat-5', 'cat-6'];
  genders: string[] = ['male', 'female', 'other'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.getField('name')?.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ],
        ],
        last: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ],
        ],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      color: ['#000000'],
      date: [''],
      month: [''],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      password: [''],
      price: ['50'],
      week: [''],
      time: [''],
      search: [''],
      description: [''],
      category: [],
      categories: [[]],
      agree: [false, [Validators.requiredTrue]],
      gender: [undefined],
    });
  }

  getNameValue() {
    console.log(this.getField('name')?.value);
  }

  get isNameValid(): boolean {
    return (
      (this.getField('name')?.touched && this.getField('name')?.valid) || false
    );
  }
  isValid(name: string): boolean {
    return (
      (this.getField(name)?.touched && this.getField(name)?.valid) || false
    );
  }
  getField(name: string) {
    return this.form.get(name);
  }

  save(event: any) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get nameField() {
    return this.form.get('fullName.name');
  }

  get lastField() {
    return this.form.get('fullName.last');
  }

  get isNameFieldValid() {
    return this.nameField?.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField?.touched && this.nameField.invalid;
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }
}
