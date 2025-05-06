import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadCOAFormComponent } from './screens/upload-coa-form/upload-coa-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  {
    path: 'form',
    component: UploadCOAFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    UploadCOAFormComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ]
})
export class UploadCOAModule { }
