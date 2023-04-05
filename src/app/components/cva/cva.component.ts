import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cva',
  templateUrl: './cva.component.html',
  styleUrls: ['./cva.component.scss'],
})
export class CvaComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      stock: [100, [Validators.required]],
    });
  }
}
