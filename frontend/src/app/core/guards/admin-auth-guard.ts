import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('docuwise_token');
    const role = localStorage.getItem('docuwise_role');

    if (token && role === 'admin') {
      return true;
    }

    // Redirect to login if not admin
    this.router.navigate(['/auth/admin-login']);
    return false;
  }
}
