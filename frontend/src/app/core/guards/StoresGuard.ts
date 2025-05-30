import { Injectable } from '@angular/core';

import { AppGlobalService, StorageService } from '../services';
import { MENU_IDS } from '@mocks/menuIds.constant';

@Injectable()
export class StoresGuard {
  //  ['Stores', 'Super Admin', 'Admin', 'MR']
  constructor(private appGlobalService: AppGlobalService) {}
  canActivate() {
    return this.appGlobalService.getPermissionRoleByModule(MENU_IDS.Stores);
  }
}
