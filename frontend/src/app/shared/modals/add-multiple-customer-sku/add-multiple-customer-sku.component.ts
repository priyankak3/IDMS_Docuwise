import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '@core/services';
import { ValidationService } from '@core/components';

@Component({
  selector: 'app-add-multiple-customer-sku',
  templateUrl: './add-multiple-customer-sku.component.html',
})
export class AddMultipleCustomerSkuComponent implements OnInit {
  @Input() action: string = '';
  @Input() customerInfoArray: any = [];
  @Input() cusInfo: any = [];

  btnDisable = false;
  page: number = 1;
  pageSize: number = 4;
  collection: number = 0;
  search: string = '';
  column: string = 'createdAt';
  direction: number = -1;

  form = new UntypedFormGroup({
    index: new UntypedFormControl(-1),
    customerName: new UntypedFormControl('', [Validators.required]),
    customer: new UntypedFormControl(''),
    customerPartNo: new UntypedFormControl('', [Validators.required]),
    customerCurrency: new UntypedFormControl(''),
    standardSellingRate: new UntypedFormControl(''),
    monthlyOffTake: new UntypedFormControl(null),
    PONo: new UntypedFormControl(null),
    PODate: new UntypedFormControl(null),
    POValidDate: new UntypedFormControl(null),
  });

  constructor(
    public activeModal: NgbActiveModal,
    private validationService: ValidationService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.collection = this.customerInfoArray.length;
  }

  eventHeader(event: any) {
    switch (event.key) {
      case 'SEARCH':
        this.search = event.value;
        break;
      case 'EXCEL':
        // this.excelDownload(this.customerInfoArray);
        break;
      case 'PAGE':
        this.page = event.value;
        break;
      default:
        //
        break;
    }
  }

  findFormErrors = [
    {
      message: 'Customer Name',
      key: 'customerName',
    },
    {
      message: 'Customer Part No.',
      key: 'customerPartNo',
    },
  ];

  addCustomer() {
    if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
      return;
    }
    let formData = this.form.value;
    if (!formData.standardSellingRate) {
      this.toastService.warning('Selling Price [Excl. of GST] is required !');
      return;
    }
    if ((formData.index || formData.index == 0) && formData.index >= 0) {
      // edit
      this.customerInfoArray.splice(formData.index, 1, formData);
    } else {
      // create
      this.customerInfoArray.push(formData);
    }
    this.collection = this.customerInfoArray.length;
    this.form.reset();
  }

  patchItem(formData: any, index: number, action: string) {
    formData.index = index;
    this.form.patchValue(formData);
    if (action == 'view') {
      this.btnDisable = true;
      this.form.disable();
    } else {
      this.form.enable();
      this.btnDisable = false;
    }
  }

  deleteItem(i: number) {
    if (this.action != 'view') {
      this.customerInfoArray.splice(i + (this.page - 1) * this.pageSize, 1);
      this.collection = this.customerInfoArray.length;
    }
  }

  setSupplierCurrency(ev: any) {
    if (ev.currency) {
      this.form.controls['customerCurrency'].setValue(ev?.currency);
    }
    if (ev.label) {
      this.form.controls['customerName'].setValue(ev?.label);
    }
  }
}
