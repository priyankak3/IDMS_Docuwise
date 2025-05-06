import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services';

@Injectable()
export class AuthGuard  {
  constructor(private router: Router,private storageService:StorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let roles = this.storageService.get('IDMSAUser').roleName;
    if (
      ["Sales", "Super Admin", "Admin", "MR"].some((x) =>
        roles.some((y: string) => x == y)
      )
    ) {
      return true;
    }
    return false;
  }
}
