import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: '', redirectTo: 'master', pathMatch: 'full' },
      {
        path: 'customer_PO',
        loadChildren: () =>
          import('./upload-customer-po/upload-customer-po.module').then((m) => m.UploadCustomerPOModule),
      },
      {
        path: 'upload_invoice',
        loadChildren: () =>
          import('./upload-invoice/upload-invoice.module').then((m) => m.UploadInvoiceModule),
      },
      {
        path: 'upload_COA',
        loadChildren: () =>
          import('./upload-coa/upload-coa.module').then((m) => m.UploadCOAModule),
      },
      {
        path: 'upload_TDS',
        loadChildren: () =>
          import('./upload-tds/upload-tds.module').then((m) => m.UploadTDSModule),
      },
    ],
  },
];


@NgModule({
  declarations: [
    MasterComponent,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MasterModule { }
