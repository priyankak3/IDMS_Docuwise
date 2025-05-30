import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { UserService } from '@services/settings';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ApiService,
  AppGlobalService,
  SpinnerService,
  StorageService,
  ToastService,
} from '@core/services';
import { ValidationService } from '@core/components';
import { MenuService } from '@services/settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  returnUrl: string = '';
  logo: string = '';
  welcomeInfo: string = '';
  isLoading: boolean = false;
  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
    ip: new UntypedFormControl('127.0.0.1', [Validators.required]),
  });
  get f() {
    return this.loginForm.controls;
  }

  constructor(
    private menuService: MenuService,
    private appGlobalService: AppGlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private storageService: StorageService,
    private apiService: ApiService,
    private validationService: ValidationService
  ) {}

  findFormErrors = [
    {
      message: 'User ID is Required',
      key: 'email',
    },
    {
      message: 'Password is Required',
      key: 'password',
    },
  ];

  getCompanyURLs() {
    // this.userService.getCompanyURLs({}).subscribe((success) => {
    //   console.log(success)
    //   this.logo = success.logoUrl;
    //   this.welcomeInfo = success.welcomeInfoUrl;
    // });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.getCompanyURLs();
    this.storageService.remove('IDMSAUser');
    // this.apiService.getIp().subscribe((data: any) => {
    //   this.f['ip'].setValue(data.ip);
    // });

    // get return url from route parameters or default to "/"
    this.returnUrl = this.route.snapshot.queryParams[`returnUrl`] || '/default';
  }
  login() {
    if (
      this.validationService.checkErrors(this.loginForm, this.findFormErrors)
    ) {
      return;
    }
    this.spinner.show();

    const loginData = { 
      email: this.loginForm.value.email, 
      password: this.loginForm.value.password 
    };

    this.userService.adminLogin(loginData).subscribe((success) => {
     
      this.storageService.set("docuwise_token", success.token);
      this.storageService.set("docuwise_role", success.role);
      this.toastService.success("Admin Login Successful!");
      this.router.navigate(["/default/admin-dashboard"]);



      this.spinner.hide();
      // this.storageService.set('IDMSAUser', success);
      // this.menuService.getAllGlobalData({}).subscribe((data) => {
      //   this.appGlobalService.setData(data);
      //   this.spinner.hide();
      //   const rolesList = data.roles;
      //   const roles = success.roles;
      //   let route = './auth/login';
      //   for (const role of roles) {
      //     let roleData = rolesList.find((ele: any) => role == ele._id);
      //     if (roleData) {
      //       route = roleData.redirectTo;
      //       break;
      //     }
      //   }
      //   this.router.navigate([route]);
      //   this.toastService.success('Login done Successfully !!');
      // });

      // const roleToRouteMap: any = {
      //   'Super Admin': './default/purchase/home',
      //   Admin: './default/purchase/home',
      //   Purchase: './default/purchase/home',
      //   'HR & Admin': './default/HR/home',
      //   Quality: './default/quality/home',
      //   Production: './default/production/home',
      //   Stores: './default/stores/home',
      //   Sales: './default/sales/home',
      //   Owner: './default/company-profile',
      //   Planning: './default/planning/home',
      //   'Business Leads': './default/business-leads/home',
      //   Maintenance: './default/maintenance/home',
      //   Dispatch: './default/dispatch/home',
      //   Finance: './default/finance/home',
      //   Accounts: './default/accounts/home',
      // };
    });
  }
}
