import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { CvaComponent } from './components/cva/cva.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'basic-form',
    component: BasicFormComponent,
  },
  {
    path: 'form-group',
    component: FormGroupComponent,
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'form-array',
    component: FormArrayComponent,
  },
  {
    path: 'cva',
    component: CvaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
