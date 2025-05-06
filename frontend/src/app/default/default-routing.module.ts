import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import {
  AccountsGuard,
  AdminAuthGuard,
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
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


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
        // canActivate: [AdminAuthGuard],
      },
      {
        path: 'admin',
        // canActivate: [AdminAuthGuard],
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
      {
        path: 'user',
        children: [
          
          {
            path: 'dashboard',
            component: UserDashboardComponent,
          },
          
        ],
      },
      // {
      //   path: 'user-dashboard',
      //   loadChildren: () =>
      //     import('./user-dashboard/user-dashboard.component').then((m) => m.UserDashboardComponent),
      //   canActivate: [SalesGuard],
      // },
      {
        path: 'smart_upload',
        loadChildren: () =>
          import('./smart-upload/smart-upload.module').then((m) => m.SmartUploadModule),
        //canActivate: [SalesGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
