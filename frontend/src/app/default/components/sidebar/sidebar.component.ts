import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from '@services/settings';

import {
  AppGlobalService,
  SpinnerService,
  StorageService,
} from '@core/services';

declare interface RouteInfo {
  label: string;
  path: string;
  icon: string;
  color: string;
  sequence: number;
  subMenus: [];
  type: string;
  isMenuActive: boolean;
  isActive: string;
  activeClass: string;
}

export const adminArray: RouteInfo[] = [
  {
    icon: "./assets/new_icons/Icon_home.svg",
    label: 'Dashboard',
    path: '/default/admin-dashboard',
    sequence:1,
    subMenus:[],
    type:'link',
    color: '#007DFA',
    isMenuActive: false,
    isActive: 'business-leads',
    activeClass: 'businessLeadsA',
  },
  {
    label: 'Dashboard',
    path: '/default/user/dashboard',
    icon: "./assets/new_icons/Icon_home.svg",
    color: '#007DAF',
    sequence:1,
    subMenus:[],
    type:'link',
    isMenuActive: false,
    isActive: 'sales',
    activeClass: 'salesA',
  },
  {
    label: 'Smart Upload',
    path: '/default/document-upload',
    icon: './assets/sideNavIcon/planning.svg',
    sequence:2,
    subMenus:[],
    type:'link',
    color: '#007DFA',
    isMenuActive: true,
    isActive: 'planning',
    activeClass: 'planingA',
  },
  {
    label: 'AI Extraction Queue',
    path: '/default/auto-extraction',
    icon: './assets/sideNavIcon/purchase.svg',
    sequence:3,
    subMenus:[],
    type:'link',
    color: '#FA0096',
    isMenuActive: false,
    isActive: 'purchase',
    activeClass: 'purchaseA',
  },
  {
    label: 'AI Generator',
    path: '/default/ai-generators',
    icon: './assets/sideNavIcon/store.svg',
    sequence:4,
    subMenus:[],
    type:'link',
    color: '#009696',
    isMenuActive: false,
    isActive: 'stores',
    activeClass: 'storesA',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isActive: boolean = false;
  menuItems: any[] = [];
  master: RouteInfo[] = [];
  userRole: string = localStorage.getItem('docuwise_role') || 'user';
  constructor(
    public router: Router,
    private spinner: SpinnerService,
    private storageService: StorageService,
    private menuService: MenuService,
    private appGlobalService: AppGlobalService
  ) {}

  ngOnInit(): void {
    this.menuItems = adminArray.filter(menuItem => menuItem);
    //this.fetchMenu();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuItems.forEach((item) => {
          item.isMenuActive = event.url.includes(item.isActive);
        });
      }
    });
  }

  getAll() {
    // this.spinner.show();
    // let payload = {
    //   system: 'main',
    //   column: 'menuOrder',
    //   direction: 1,
    // };
    // this.menuService.getAll(payload).subscribe((success) => {
    //   this.menuItems = success;
    //   this.gotoTop();
    //   this.spinner.hide();
    // });
  }

  navigateTo(page: string, isMenuActive: boolean = false) {
    if (isMenuActive) {
      this.router.navigate([page]);
      this.storageService.set('tab', 'HOME');
    }
  }
  getBackgroundColor(color: string) {
    var hex = color.replace('#', '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var r = parseInt(hex.substring(0, 2), 16),
      g = parseInt(hex.substring(2, 4), 16),
      b = parseInt(hex.substring(4, 6), 16);
    color = 'rgba(' + r + ',' + g + ',' + b + ',0.1)';
    return color;
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
