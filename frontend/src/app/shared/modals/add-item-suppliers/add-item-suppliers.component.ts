import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '@core/services';
import { ValidationService } from '@core/components';

@Component({
  selector: 'app-add-item-suppliers',
  templateUrl: './add-item-suppliers.component.html',
  styleUrls: ['./add-item-suppliers.component.scss'],
})
export class AddItemSuppliersComponent implements OnInit {
  @Input() action: string = '';
  @Input() supInfo: any = [];
  @Input() supplierDetails: any = [];

  btnDisable = false;
  page: number = 1;
  pageSize: number = 4;
  collection: number = 0;
  search: string = '';
  column: string = 'createdAt';
  direction: number = -1;

  constructor(
    public activeModal: NgbActiveModal,
    private validationService: ValidationService,
    private toastService: ToastService
  ) {}
  form = new UntypedFormGroup({
    index: new UntypedFormControl(-1),
    supplierName: new UntypedFormControl(''),
    supplierCurrency: new UntypedFormControl(''),
    supplierId: new UntypedFormControl('', [Validators.required]),
    spin: new UntypedFormControl(''),
    stdCostUom1: new UntypedFormControl(null),
  });

  ngOnInit(): void {
    this.collection = this.supplierDetails.length;
  }

  eventHeader(event: any) {
    switch (event.key) {
      case 'SEARCH':
        this.search = event.value;
        break;
      case 'EXCEL':
        // this.excelDownload(this.customerContactInfoArray);
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
      message: 'Supplier Name',
      key: 'supplierId',
    },
  ];

  addSuppliers() {
    if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
      return;
    }
    let formData = this.form.value;
    if (!formData.stdCostUom1) {
      this.toastService.warning('Purchase Cost [Excl. of GST] is required !');
      return;
    }
    if ((formData.index || formData.index == 0) && formData.index >= 0) {
      // edit
      this.supplierDetails.splice(formData.index, 1, formData);
    } else {
      // create
      this.supplierDetails.push(formData);
    }
    this.collection = this.supplierDetails.length;
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
      this.supplierDetails.splice(i + (this.page - 1) * this.pageSize, 1);
      this.collection = this.supplierDetails.length;
    }
  }

  setSupplierCurrency(ev: any) {
    if (ev.currency) {
      this.form.controls['supplierCurrency'].setValue(ev?.currency);
    }
    if (ev.label) {
      this.form.controls['supplierName'].setValue(ev?.label);
    }
  }
}
