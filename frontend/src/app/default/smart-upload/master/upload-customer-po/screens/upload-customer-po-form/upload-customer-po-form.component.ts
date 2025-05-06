import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SpinnerService, UtilityService} from "@core/services";
import {TemplateMasterService} from "@services/production/templateMaster.service";
import {Location} from "@angular/common";
import {ProspectService} from "@services/business-leads";

@Component({
  selector: 'app-upload-customer-po-form',
  templateUrl: './upload-customer-po-form.component.html',
  styleUrls: ['./upload-customer-po-form.component.scss']
})
export class UploadCustomerPOFormComponent implements OnInit {
  submitted = false;
  action: string = "create";
  uploadFile: any = null;
  documentType: any = ["Courtesy Mail", "Follow-Up Mail", "Offer Mail"];

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private spinner: SpinnerService,
      private toastService: ToastService,
      private templateMasterService: TemplateMasterService,
      private validationService: ValidationService,
      private utilityService: UtilityService,
      private location: Location,
      private prospectService: ProspectService
  ) {}

  form = new UntypedFormGroup({
      _id: new UntypedFormControl(null),
      prospectRegistrationCode: new UntypedFormControl(null),
      // mailType: new UntypedFormControl(null),
      uploadFile: new UntypedFormControl(null),
      uploadFileUrl: new UntypedFormControl(null),
      status: new UntypedFormControl("Active")
  });

  get f() {
      return this.form.controls;
  }

  ngOnInit(): void {
      this.getInitialData();
  }

  navigateTo(path: string, id: any, action: string) {
      this.router.navigate([path], {queryParams: {id, action}});
  }

  reset() {
      this.form.reset();
      this.getInitialData();
  }

  submit() {
      this.submitted = true;
      this.form.enable();

      let formData: any = this.form.value;
      let formValue = new FormData();
      formValue.append("key", "imageUpload");

      for (let i = 0; i < Object.keys(formData).length; i++) {
          const key = Object.keys(formData)[i];
          if (formData[key] && typeof formData[key] == "object") {
              if (formData[key]) {
                  formValue.append(key, JSON.stringify(formData[key]));
              }
          } else {
              if (formData[key]) {
                  formValue.append(key, formData[key]);
              }
          }
      }
      if (this.uploadFile) {
          if (typeof this.uploadFile == "object") {
              formValue.append("uploadFile", this.uploadFile, this.uploadFile.name);
          }
      }

      // if (formData._id) {
      //     this.update(formData._id, formValue);
      // } else {
      delete formData._id;
      this.create(formValue);
      // }
  }

  create(formData: any) {
      this.spinner.show();
      this.prospectService.createUpload(formData).subscribe(success => {
          this.submitted = false;
          this.spinner.hide();
          this.toastService.success(success.message);
          this.router.navigate(["/default/business-leads/master/prospect/list"]);
          // this.location.back();
      });
  }
  getInitialData() {
      this.spinner.show();
      this.prospectService.getAllMasterData({}).subscribe(result => {
          this.activatedRoute.queryParams
              .pipe(
                  mergeMap((params: any) => {
                      this.action = params.action;
                      // if (!!!this.action) {
                      //     this.toastService.warning("You do not have access", "Access denied");
                      //     this.router.navigate(["./default/supports/access_denied"]);
                      // }
                      if (params["id"]) {
                          return this.templateMasterService.getById(params["id"]);
                      } else {
                          return of({});
                      }
                  })
              )
              .subscribe((success: any) => {
                  this.spinner.hide();
                  if (Object.keys(success).length == 0) {
                      return;
                  }
                  this.form.patchValue(success);
                  if (this.action != "edit") {
                      this.form.disable();
                  }
              });
      });
  }
}

