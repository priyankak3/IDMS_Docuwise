import { ReactiveFormsModule } from '@angular/forms';
import { CreateTenantComponent } from './screens/create-tenant.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
      CreateTenantComponent,
      
    ],
    imports: [
      ReactiveFormsModule,
      // ... other modules
    ]
  })
  export class TenantsModule { }
  