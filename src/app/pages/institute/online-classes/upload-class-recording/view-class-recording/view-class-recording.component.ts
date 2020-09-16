import { MeetingService } from './../../../../../services/meeting.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-view-class-recording',
  templateUrl: './view-class-recording.component.html',
  styleUrls: ['./view-class-recording.component.scss'],
})
export class ViewClassRecordingComponent implements OnInit {
  @Input() meeting: any;
  @Output() close = new EventEmitter<void>();
  @Output() deleteClassRecording = new EventEmitter<{ _id: string; recordingId: string }>();

  playVideoRecording: boolean;
  recording: any;

  months: string[] = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  constructor(private meetingService: MeetingService, private toasterService: NbToastrService) {}

  ngOnInit() {
    this.playVideoRecording = false;
  }

  deleteRecording(_id: string, recordingId: string) {
    this.meetingService.deleteRecording(_id, recordingId, this.meeting.instituteId).subscribe(
      (res: any) => {
        const i = this.meeting.recordings.findIndex(
          (recording: any) => recording._id === recordingId,
        );
        if (i >= 0) {
          this.meeting.recordings.splice(i, 1);
        }
        this.deleteClassRecording.emit({ _id, recordingId });
        this.showToast('top-right', 'success', 'Recording Deleted Successfully');
      },
      (err: any) => {
        this.showToast('top-right', 'danger', err.err.message);
      },
    );
  }

  viewRecording(recording: any) {
    this.recording = recording;
    this.playVideoRecording = true;
  }

  closePlayingVideo() {
    this.recording = null;
    this.playVideoRecording = false;
  }

  month(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  day(date: string) {
    return date.split('-')[2];
  }

  createDate(date: string) {
    return date.split('-').reverse().join('-');
  }

  createTime(time: any) {
    if (!time) {
      return '--';
    }
    time = time.split(':');
    let hours = +time[0];
    const minute = time[1];
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    if (hours === 0) {
      hours = 12;
    } else if (hours >= 12) {
      hours -= 12;
    }

    return hours.toString().padStart(2, '0') + ':' + minute + ' ' + meridiem;
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }

  onClose() {
    this.close.emit();
  }
}
