import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '@shared/shared.module';
import { TenantsComponent } from './screens/tenants/tenants.component';
import { UsersComponent } from './screens/users/users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent,TenantsComponent,UsersComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule,ReactiveFormsModule],
})
export class AdminModule {}
