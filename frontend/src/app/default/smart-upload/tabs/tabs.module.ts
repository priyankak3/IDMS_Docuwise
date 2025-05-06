import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterTabsComponent } from './master-tabs.component';
import { SharedModule } from '@shared/shared.module';
import { TransactionTabsComponent } from './transaction-tabs.component';
import { ReportTabsComponent } from './report-tabs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "master-tabs", pathMatch: "full" },
  { path: "master-tabs", component: MasterTabsComponent },
  { path: "txn-tabs", component: TransactionTabsComponent },
  { path: "reports-tabs", component: ReportTabsComponent }
];

@NgModule({
  declarations: [
    MasterTabsComponent,
    TransactionTabsComponent,
    ReportTabsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ]
})
export class TabsModule { }
