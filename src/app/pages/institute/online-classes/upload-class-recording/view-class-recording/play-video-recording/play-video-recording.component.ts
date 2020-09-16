import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-play-video-recording',
  templateUrl: './play-video-recording.component.html',
  styleUrls: ['./play-video-recording.component.scss'],
})
export class PlayVideoRecordingComponent implements OnInit {
  @Input() recording: any;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.close.emit();
  }
}
