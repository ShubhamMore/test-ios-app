import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent implements OnInit {
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.close.emit();
  }
}
