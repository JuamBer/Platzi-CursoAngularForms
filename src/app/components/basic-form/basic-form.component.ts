import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  nameField = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  dateField = new FormControl('');
  monthField = new FormControl('');
  ageField = new FormControl(12);
  passwordField = new FormControl('');
  priceField = new FormControl('50');
  weekField = new FormControl('');
  timefield = new FormControl('');
  searchField = new FormControl('');
  descriptionField = new FormControl('');
  categoryField = new FormControl();
  categoriesField = new FormControl([]);
  agreeField = new FormControl(false);
  genderField = new FormControl(undefined);

  categories: string[] = ['cat-1', 'cat-2', 'cat-3', 'cat-4', 'cat-5', 'cat-6'];
  genders: string[] = ['male', 'female', 'other'];

  constructor() {}

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }
}
