import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { CvaComponent } from './components/cva/cva.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { RegisterComponent } from './components/register/register.component';
import { VarDirective } from './directives/var.directive';
import { StepperComponent } from './shared/components/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    FormGroupComponent,
    FormBuilderComponent,
    VarDirective,
    FormErrorsComponent,
    FormErrorsComponent,
    RegisterComponent,
    FormArrayComponent,
    StepperComponent,
    StepperComponent,
    CvaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormErrorsComponent, StepperComponent],
})
export class AppModule {}
