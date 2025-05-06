import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddRevisionDetailsModalComponent} from "../add-revision-details-modal/add-revision-details-modal.component";

@Component({
    selector: "app-revision-history-details-modal",
    templateUrl: "./revision-history-details-modal.component.html",
    styleUrls: ["./revision-history-details-modal.component.scss"]
})
export class RevisionHistoryDetailsModalComponent implements OnInit {
    @Input() action: any = "";
    @Input() modalTitle: any = "";
    @Input() tableHeader: any = [];
    @Input() tableBody: any = [];
    page: number = 1;
    pageSize: number = 7;
    collection: number = 0;
    search: string = "";
    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}

    ngOnInit(): void {
        // this.page = +this.tableBody?.length;
        this.tableBody = this.tableBody?.reverse();
    }

    openEditionDetailsModal(item: any) {
        const modalRef = this.modalService.open(AddRevisionDetailsModalComponent, {
            centered: true,
            size: "sm-lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = "view";
        modalRef.componentInstance.revisionInfo = item?.revisionInfo;
        modalRef.result.then(
            (success: any) => {},
            (reason: any) => {}
        );
    }
    get totalPageCount(): number {
        return Math.ceil(this.tableBody.length / this.pageSize);
    }
}
