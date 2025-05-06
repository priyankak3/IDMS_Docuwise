import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgSelectModule} from "@ng-select/ng-select";

import {
    AlertComponent,
    CustomMenuHeaderComponent,
    ValidationMessagesComponent,
    CustomTableComponent,
    SettingHeaderComponent,
    FileUploadComponent,
    FileUploadProjectComponent,
    TabCardComponent
} from "../core/components";

import {
    NgbdSortableHeader,
    TwoDigitDecimalNumberDirective,
    AccessControlDirective,
    EllipsisDirective,
    HighlightSearchDirective,
    TimeAgoDirective,
    CopyToClipboardDirective,
    LazyLoadImageDirective
} from "./directives";

import {
    SearchFilterPipe,
    TruncatePipe,
    ToWordsPipe,
    LabelTranslatePipe,
    CompanyCurrencyPipe,
    SeparateWordsPipe,
    FindTextContentPipe
} from "./pipes";

import {
    AddAddressComponent,
    ContactDetailsComponent,
    POOtherChargesComponent,
    ViewAddressComponent,
    iBASModalComponent,
    AddItemSuppliersComponent,
    AddItemUOMComponent,
    SalesDispatchDetailsComponent,
    AddMultipleCustomerSkuComponent,
    PopUpNotesComponent,
    CancelPoComponent,
    BOMCompositionComponent,
    RevisionHistoryDetailsModalComponent,
    AddRevisionDetailsModalComponent,
    CustomDetailsModalComponent
} from "./modals";

import {CancelSoLineDetailsComponent} from "./modals/cancel-so-line-details/cancel-so-line-details.component";
import {DetailsOfCustomersListComponent} from "./modals/details-of-customers-list/details-of-customers-list.component";

const COMPONENTS: any = [
    AlertComponent,
    ValidationMessagesComponent,
    CustomMenuHeaderComponent,
    FileUploadComponent,
    FileUploadProjectComponent,
    CustomTableComponent,
    SettingHeaderComponent,
    TabCardComponent,
    POOtherChargesComponent,
    iBASModalComponent,
    ViewAddressComponent,
    AddAddressComponent,
    ContactDetailsComponent,
    SalesDispatchDetailsComponent,
    AddItemSuppliersComponent,
    AddItemUOMComponent,
    SalesDispatchDetailsComponent,
    AddMultipleCustomerSkuComponent,
    PopUpNotesComponent,
    CancelPoComponent,
    BOMCompositionComponent,
    DetailsOfCustomersListComponent,
    RevisionHistoryDetailsModalComponent,
    AddRevisionDetailsModalComponent,
    CustomDetailsModalComponent
];
const PIPES: any = [
    SearchFilterPipe,
    TruncatePipe,
    ToWordsPipe,
    LabelTranslatePipe,
    CompanyCurrencyPipe,
    SeparateWordsPipe,
    FindTextContentPipe
];
const DIRECTIVES: any = [
    NgbdSortableHeader,
    TwoDigitDecimalNumberDirective,
    AccessControlDirective,
    LazyLoadImageDirective
];
const MODULES: any = [CommonModule, NgbModule, ReactiveFormsModule, FormsModule, NgSelectModule];
@NgModule({
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES,
        CancelSoLineDetailsComponent,
        EllipsisDirective,
        HighlightSearchDirective,
        TimeAgoDirective,
        CopyToClipboardDirective
    ],
    imports: [...MODULES],
    exports: [...COMPONENTS, ...MODULES, ...DIRECTIVES, ...PIPES]
})
export class SharedModule {}
