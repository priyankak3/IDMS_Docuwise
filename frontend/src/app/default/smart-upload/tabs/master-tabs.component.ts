import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppGlobalService, MenuTitleService, SpinnerService, StorageService } from '@core/services';
import { SUB_MODULES_TYPES } from '@mocks/constant';
import { SubModulesService } from '@services/settings';

@Component({
  selector: 'app-master-tabs',
  template: `<appTabCard
  [data]="{
            cards,
            noOfCards:4,
            cardClass:'masterCard'
          }"
  (dataChange)="navigateTo($event)"
></appTabCard>`
})
export class MasterTabsComponent  implements OnInit {
  title: any = "";
  menuItemId: any = "";
  cards: any = [];
  constructor(
      private menuTitleService: MenuTitleService,
      private appGlobalService: AppGlobalService,
      private subModulesService: SubModulesService,
      private spinner: SpinnerService,
      private router: Router,
      private storageService: StorageService
  ) {}

  ngOnInit(): void {
      this.title = this.appGlobalService.moduleName;
      this.menuItemId = this.appGlobalService.menuItemId;
      this.getAll();
      this.menuTitleService.set({
        //   title: `${this.title} - Masters`,
          title: `Smart Upload - Masters`,
          subTitle: null,
          type: null
      });
  }

  getAll() {
      this.spinner.show();
    //   let payload = {
    //       menuID: this.menuItemId,
    //       tabType: SUB_MODULES_TYPES.MASTER
    //   };
    //   this.subModulesService.getAll(payload).subscribe(success => {
    //       this.cards = success.rows;
          this.cards.push(
            {
            // menuItemId: "64a6c1e33339d4dc9d8141ae",
            module: "Smart Upload",
            type: "MASTER",
            order: 1,
            isDisplay: true,
            title: "Upload Customer PO",
            displayName: "Upload Customer PO",
            disabled: false,
            url: "/default/smart_upload/master/customer_PO/form",
            items: []
        },
            {
            // menuItemId: "64a6c1e33339d4dc9d8141ae",
            module: "Smart Upload",
            type: "MASTER",
            order: 2,
            isDisplay: true,
            title: "Upload Invoice",
            displayName: "Upload Invoice",
            disabled: false,
            url: "/default/smart_upload/master/upload_invoice/form",
            items: []
        },
            {
            // menuItemId: "64a6c1e33339d4dc9d8141ae",
            module: "Smart Upload",
            type: "MASTER",
            order: 3,
            isDisplay: true,
            title: "Upload COA",
            displayName: "Upload COA",
            disabled: false,
            url: "/default/smart_upload/master/upload_COA/form",
            items: []
        },
            {
            // menuItemId: "64a6c1e33339d4dc9d8141ae",
            module: "Smart Upload",
            type: "MASTER",
            order: 4,
            isDisplay: true,
            title: "Upload Bank Statement",
            displayName: "Upload Bank Statement",
            disabled: false,
            url: "/default/smart_upload/master/audit/form",
            items: []
        },
            {
            // menuItemId: "64a6c1e33339d4dc9d8141ae",
            module: "Smart Upload",
            type: "MASTER",
            order: 5,
            isDisplay: true,
            title: "Upload TDS Form",
            displayName: "Upload TDS Form",
            disabled: false,
            url: "/default/smart_upload/master/upload_TDS/form",
            items: []
        },
            {
            // menuItemId: "64a6c1e33339d4dc9d8141ae",
            module: "Smart Upload",
            type: "MASTER",
            order: 6,
            isDisplay: true,
            title: "Upload PAN/Aadhaar",
            displayName: "Upload PAN/Aadhaar",
            disabled: false,
            url: "/default/smart_upload/master/audit/form",
            items: []
        },
            {
            // menuItemId: "64a6c1e33339d4dc9d8141ae",
            module: "Smart Upload",
            type: "MASTER",
            order: 7,
            isDisplay: true,
            title: "Upload Challan",
            displayName: "Upload Challan",
            disabled: false,
            url: "/default/smart_upload/master/audit/form",
            items: []
        },
            {
            // menuItemId: "64a6c1e33339d4dc9d8141ae",
            module: "Smart Upload",
            type: "MASTER",
            order: 8,
            isDisplay: true,
            title: "Upload Contract",
            displayName: "Upload Contract",
            disabled: false,
            url: "/default/smart_upload/master/audit/form",
            items: []
        },
      );
          let dummyCount = 4 - this.cards.length;
          if (dummyCount > 0) {
              for (var i = 0; i < dummyCount; i++) {
                  this.cards.push({
                      displayName: "Place Holder",
                      disabled: true,
                      url: null
                  });
              }
          }
    //   });
      this.spinner.hide();
  }

  navigateTo({url: path, disabled: action, displayName, _id: subModuleId}: any) {

      let obj = {
          title: displayName,
          subTitle: null,
          type: null,
          subModuleId: subModuleId
      };
      this.storageService.set("menuTitle", obj);
      if (!action) {
          this.menuTitleService.set(obj);
          this.router.navigate([path]);
      }
  }
}

