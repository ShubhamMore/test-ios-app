import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-play-links',
  templateUrl: './play-links.component.html',
  styleUrls: ['./play-links.component.scss'],
})
export class PlayLinksComponent implements OnInit {
  @Input() recording: any;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.close.emit();
  }
}
