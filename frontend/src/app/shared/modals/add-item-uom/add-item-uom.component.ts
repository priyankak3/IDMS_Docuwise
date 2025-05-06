import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITEM_DUAL_UNITS_FORM_ERRORS } from '@mocks/validations/purchase';
import { ValidationService } from '@core/components';

@Component({
  selector: 'app-add-item-uom',
  templateUrl: './add-item-uom.component.html',
})
export class AddItemUOMComponent implements OnInit {
  @Input() action: any = '';
  @Input() ModalUOMsUnit: any = [];
  @Input() dualUnits = {};
  form: any = new UntypedFormGroup({
    primaryUnit: new UntypedFormControl(null, [Validators.required]),
    secondaryUnit: new UntypedFormControl(null, [Validators.required]),
    unitConversionFlag: new UntypedFormControl(1),
    primaryConversion: new UntypedFormControl(1),
    secondaryConversion: new UntypedFormControl(1),
    primaryToSecondaryConversion: new UntypedFormControl(null),
    secondaryToPrimaryConversion: new UntypedFormControl(null),
  });

  get f() {
    return this.form.controls;
  }
  constructor(
    public activeModal: NgbActiveModal,
    private validationService: ValidationService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(this.dualUnits);
    if (this.f.unitConversionFlag.value == 2) {
      this.form.controls['primaryConversion'].disable();
      this.form.controls['primaryToSecondaryConversion'].setValue(null);
      this.form.controls['primaryToSecondaryConversion'].disable();
      this.form.controls['secondaryConversion'].enable();
      this.form.controls['secondaryToPrimaryConversion'].enable();
    } else {
      this.form.controls['secondaryConversion'].disable();
      this.form.controls['secondaryToPrimaryConversion'].setValue(null);
      this.form.controls['secondaryToPrimaryConversion'].disable();
      this.form.controls['primaryConversion'].enable();
      this.form.controls['primaryToSecondaryConversion'].enable();
    }
    if (this.action == 'Converted to SKU') {
      this.form.disable();
    }
  }

  handleRadio() {
    if (this.f.unitConversionFlag.value == 2) {
      this.form.controls['primaryConversion'].disable();
      this.form.controls['primaryToSecondaryConversion'].setValue(null);
      this.form.controls['primaryToSecondaryConversion'].disable();
      this.form.controls['secondaryConversion'].enable();
      this.form.controls['secondaryToPrimaryConversion'].enable();
    } else {
      this.form.controls['secondaryConversion'].disable();
      this.form.controls['secondaryToPrimaryConversion'].setValue(null);
      this.form.controls['secondaryToPrimaryConversion'].disable();
      this.form.controls['primaryConversion'].enable();
      this.form.controls['primaryToSecondaryConversion'].enable();
    }
  }
  dismissModel() {
    this.form.enable();
    if (
      this.validationService.checkErrors(this.form, ITEM_DUAL_UNITS_FORM_ERRORS)
    ) {
      return;
    }
    this.activeModal.close(this.form.value);
  }
}
