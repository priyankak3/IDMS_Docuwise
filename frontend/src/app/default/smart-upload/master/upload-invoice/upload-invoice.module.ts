import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadInvoiceFormComponent } from './screens/upload-invoice-form/upload-invoice-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  {
    path: 'form',
    component: UploadInvoiceFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    UploadInvoiceFormComponent
  ],
  imports: [
    CommonModule,  RouterModule.forChild(routes),SharedModule
  ]
})
export class UploadInvoiceModule { }
