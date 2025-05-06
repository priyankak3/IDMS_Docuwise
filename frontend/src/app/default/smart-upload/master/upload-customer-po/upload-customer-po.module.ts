import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadCustomerPOFormComponent } from './screens/upload-customer-po-form/upload-customer-po-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  {
    path: 'form',
    component: UploadCustomerPOFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    UploadCustomerPOFormComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),SharedModule
  ]
})
export class UploadCustomerPOModule { }
