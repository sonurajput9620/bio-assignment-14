import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-read-more-modal',
  templateUrl: './read-more-modal.component.html',
  styleUrls: ['./read-more-modal.component.scss'],
})
export class ReadMoreModalComponent implements OnInit {
  constructor(private modalSvc: NgbActiveModal) {}

  ngOnInit(): void {}

  close() {
    this.modalSvc.dismiss();
  }
}
