import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import {
  AccountsGuard,
  BusinessLeadsGuard,
  DispatchGuard,
  FinanceGuard,
  HRAdminGuard,
  MaintenanceGuard,
  PlanningGuard,
  ProductionGuard,
  PurchaseGuard,
  QualityGuard,
  SalesGuard,
  SettingsGuard,
  StoresGuard,
  SupportGuard
} from '../core/guards';
import { TenantsComponent } from './admin/screens/tenants/tenants.component';
import { UsersComponent } from './admin/screens/users/users.component';
// import { CompanyComponent } from './settings/master/global/company/company.component';
 

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      {
        path: 'admin-dashboard',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
        // canActivate: [SalesGuard],
      },
      {
        path: 'admin',
        children: [
          {
            path: 'tenants',
            component: TenantsComponent,
          },
          {
            path: 'users',
            component: UsersComponent,
          },
          
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
