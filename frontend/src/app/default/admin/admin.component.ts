import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '@core/services';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router,private toastService: ToastService) {
   
  }
  ngOnInit(): void {
    
  }
  handleLogout(): void {
    localStorage.removeItem('docuwise_token');
    localStorage.removeItem('docuwise_role');
    this.toastService.success("Logged out successfully");
    this.router.navigate(['/login']);
  }

  goToTenants(): void {
    this.router.navigate(['/default/admin/tenants']);
  }

  goToUsers(): void {
    this.router.navigate(['/default/admin/users']);
  }
}
