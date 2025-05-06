import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {UtilityService} from "@core/services";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {REVISION_DETAILS_FORM_ERRORS} from "@mocks/validations/purchase";

@Component({
    selector: "app-add-revision-details-modal",
    templateUrl: "./add-revision-details-modal.component.html"
})
export class AddRevisionDetailsModalComponent implements OnInit {
    @Input() action: any = "";
    @Input() revisionInfo: any = {};
    form: any = new UntypedFormGroup({
        revisionNo: new UntypedFormControl(null, [Validators.required]),
        revisionDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        reasonForRevision: new UntypedFormControl(null, [Validators.required]),
        revisionProposedBy: new UntypedFormControl(null, [Validators.required]),
        revisionApprovedBy: new UntypedFormControl(null, [Validators.required])
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        if (this.revisionInfo?.revisionDate) {
            this.revisionInfo.revisionDate = this.utilityService.getFormatDate(
                this.revisionInfo?.revisionDate,
                "YYYY-MM-DD"
            );
        }
        if (this.revisionInfo) {
            this.form.patchValue(this.revisionInfo);
        }
        if (this.action == "view") {
            this.form.disable();
        }
    }
    dismissModel() {
        if (this.validationService.checkErrors(this.form, REVISION_DETAILS_FORM_ERRORS)) {
            return;
        }
        let formData = this.form.value;
        if (formData) {
            this.activeModal.close({
                revisionInfo: formData
            });
        }
    }
}
