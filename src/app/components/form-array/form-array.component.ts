import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  form = this.fb.group({
    lessons: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get lessons() {
    return this.form.controls['lessons'] as FormArray;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required],
    });

    this.lessons.push(lessonForm);
  }
  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  getForm(abstractControl: AbstractControl) {
    return abstractControl as FormGroup;
  }
}
