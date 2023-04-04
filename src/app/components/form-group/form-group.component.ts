import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    month: new FormControl(''),
    age: new FormControl(12),
    password: new FormControl(''),
    price: new FormControl('50'),
    week: new FormControl(''),
    time: new FormControl(''),
    search: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(),
    categories: new FormControl([]),
    agree: new FormControl(false),
    gender: new FormControl(undefined),
  });

  categories: string[] = ['cat-1', 'cat-2', 'cat-3', 'cat-4', 'cat-5', 'cat-6'];
  genders: string[] = ['male', 'female', 'other'];

  constructor() {}

  ngOnInit(): void {
    this.getField('name')?.valueChanges.subscribe((value) => {
      console.log(value);
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

  getField(name: string) {
    return this.form.get(name);
  }

  save(event: any) {
    console.log(this.form.value);
  }
}
