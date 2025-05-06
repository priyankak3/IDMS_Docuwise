import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadTDSFormComponent } from './screens/upload-tds-form/upload-tds-form.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FormScreenResolver } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  {
    path: 'form',
    component: UploadTDSFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    UploadTDSFormComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ]
})
export class UploadTDSModule { }
