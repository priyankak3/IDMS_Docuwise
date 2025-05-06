import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from '@directives/sortable.directive';

@Component({
  selector: 'app-cancel-po',
  templateUrl: './cancel-po.component.html',
})
export class CancelPoComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers:
    | QueryList<NgbdSortableHeader>
    | any;
  @Input() action: string = '';
  @Input() heading: string = '';
  @Input() cancelText: string = '';

  btnDisable = false;
  page: number = 1;
  pageSize: number = 5;
  collection: number = 0;
  search: string = '';
  column: string = 'createdAt';
  direction: number = -1;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  dismissModel(title: string) {
    this.activeModal.close(title);
  }
}
