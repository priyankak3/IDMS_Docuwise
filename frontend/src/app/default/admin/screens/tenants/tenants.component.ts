import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminApiService } from '@core/services';
import { SortEvent } from '@shared/directives';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateTenantComponent } from './screens/create-tenant.component';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent implements OnInit {

  tenants: any[] = [];
  showModal = false;
  tenantForm: FormGroup;
  headers: any;
  column: any;
  direction: number =-1;

  constructor(
    private fb: FormBuilder,
    private apiService: AdminApiService,  
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {
    this.tenantForm = this.fb.group({
      tenantCode: ['', Validators.required],
      tenantName: ['', Validators.required],
      status: ['active', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchTenants();
  }
  trackByFn(index: number, item: any) {
    return item?._id;
}

  fetchTenants() {
    this.apiService.getTenants().subscribe(
      data => this.tenants = data,
      err => this.toastr.error('Failed to load tenants')
    );
  }

  handleCreateTenant() {
    if (this.tenantForm.invalid) {
      this.toastr.error('Form is invalid');
      return;
    }

    this.apiService.createTenant(this.tenantForm.value).subscribe(
      () => {
        this.toastr.success('Tenant created!');
        this.showModal = false;
        this.fetchTenants();  // Refresh the tenant list after creation
      },
      err => {
        this.toastr.error(err?.error?.message || 'Failed to create tenant');
      }
    );
  }
  onSort({column, direction}: SortEvent) {
    this.headers.forEach((header: any) => {
        if (header.sortable !== column) {
            header.direction = "";
        }
    });
    this.column = column;
    this.direction = direction == "asc" ? 1 : -1;
    this.fetchTenants();
}
  
openModal() {
  const modalRef = this.modalService.open(CreateTenantComponent, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });

  modalRef.result.then((result) => {
    if (result) {
      console.log('Tenant created:', result);
      // call API or update list
    }
  }, () => {
    console.log('Modal closed');
  });
}

  closeModal() {
    this.showModal = false;
  }
}
