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
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: [''],
      phone: ['', [Validators.required]],
      color: ['#000000'],
      date: [''],
      month: [''],
      age: [12],
      password: [''],
      price: ['50'],
      week: [''],
      time: [''],
      search: [''],
      description: [''],
      category: [],
      categories: [[]],
      agree: [false],
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
}
