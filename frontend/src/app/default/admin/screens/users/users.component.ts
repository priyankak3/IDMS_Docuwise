import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminApiService, StorageService } from '@core/services';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  tenants: any[] = [];
  userForm: FormGroup;
  showModal = false;

  constructor(
    private fb: FormBuilder,
    private apiService: AdminApiService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private storageService: StorageService
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      tenantId: ['', Validators.required],
      role: ['user', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchTenants();
  }

  fetchUsers() {
   
    this.apiService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      err => {
        this.toastr.error('Failed to load users');
      }
    );
  }

  fetchTenants() {
    
    this.apiService.getTenants().subscribe(
      data => {
        this.tenants = data;
      },
      err => {
        this.toastr.error('Failed to load tenants');
      }
    );
  }

  openModal(content: any) {
    this.showModal = true;
    this.modalService.open(content, { centered: true });
  }

  closeModal() {
    this.showModal = false;
    this.modalService.dismissAll();
  }

  handleCreateUser() {
    if (this.userForm.invalid) {
      this.toastr.error('Form is invalid');
      return;
    }

    const token = this.storageService.get("docuwise_token")
    this.apiService.createUser(this.userForm.value, token).subscribe(
      () => {
        this.toastr.success('User created!');
        this.closeModal();
        this.fetchUsers();  // Refresh the user list after creation
      },
      err => {
        this.toastr.error(err?.error?.message || 'Failed to create user');
      }
    );
  }
}
