import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    FormGroupComponent,
    FormBuilderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
