import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
})
export class FormErrorsComponent implements OnInit {
  @Input() field: AbstractControl | null = null;

  constructor() {}

  ngOnInit(): void {}

  isValid(): boolean {
    return (this.field?.touched && this.field?.valid) || false;
  }
}
