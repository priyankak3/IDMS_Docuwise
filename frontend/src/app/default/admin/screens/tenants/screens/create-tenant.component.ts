import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminApiService, ToastService } from '@core/services';


@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
})
export class CreateTenantComponent {
  tenantForm: FormGroup;
  tenants: any[] = [];

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private toastService : ToastService,
    private apiService: AdminApiService
  ) {
    this.tenantForm = this.fb.group({
      tenantCode: ['', Validators.required],
      tenantName: ['', Validators.required],
      status: ['active', Validators.required]
    });
  }

  createTenant() {
    if (this.tenantForm.invalid) {
      this.toastService.error('Form is invalid');
      return;
    }

    this.apiService.createTenant(this.tenantForm.value).subscribe(
      () => {
        this.toastService.success('Tenant created!');
        this.fetchTenants();
        this.activeModal.dismiss()
      },
      err => {
        this.toastService.error(err?.error?.message || 'Failed to create tenant');
      }
    );
  }
  fetchTenants() {
    this.apiService.getTenants().subscribe(
      data => this.tenants = data,
      err => this.toastService.error('Failed to load tenants')
    );
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}
