import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services';

@Component({
  selector: 'app-smart-upload',
  template: `<app-custom-menu-header [menuData]="menuData" *ngIf="!isReport"></app-custom-menu-header
        ><router-outlet></router-outlet>`,
  styleUrls: ['./smart-upload.component.scss']
})
export class SmartUploadComponent implements OnInit {
  isReport: boolean = false;
  menuData: any = {
      homeDisplay: true,
      homeUrl: "default/smart_upload/home",
      masterUrl: "/default/smart_upload/tabs/master-tabs",
      masterTitle: "Masters",
      masterDisplay: true,
      transactionUrl: "/default/smart_upload/tabs/txn-tabs",
      transactionTitle: "Transactions",
      transactionDisplay: true,
      reportUrl: "/default/smart_upload/tabs/reports-tabs",
      reportTitle: "Reports",
      reportDisplay: true,
      title: "smart_upload",
      type: null,
      subTitle: ""
  };
  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
      this.isReport = this.router.url.split("/")[3] == "reports";
      let menuTitle = this.storageService.get("menuTitle");
      if (menuTitle && this.menuData.title != menuTitle.title) {
          this.menuData.title = menuTitle.title;
      }
  }
}
