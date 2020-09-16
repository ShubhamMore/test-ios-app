import { editorConfig } from './../../../config/editor.config';
import { NbToastrService } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../../../services/communication/announcement.service';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  file: File;
  announcementForm: FormGroup;
  announcements = [];
  announcementId: any;
  announcement: any;
  edit: any;
  repeat: any;
  batches: any[];
  institute: any;
  display = false;
  InstituteId: string;

  editorConfig = editorConfig;

  categoryError: boolean;
  batchError: boolean;
  @ViewChild('pickedFile', { static: false }) pickedFile: ElementRef;

  constructor(
    private fb: FormBuilder,
    private toastrService: NbToastrService,
    private location: Location,
    private api: ApiService,
    private active: ActivatedRoute,
    private announceService: AnnouncementService,
  ) {}

  ngOnInit() {
    this.InstituteId = this.active.snapshot.paramMap.get('id');
    this.active.queryParams.subscribe((data) => {
      this.announcementId = data.announcement;
      this.edit = data.edit;
      this.repeat = data.repeat;
    });
    this.batches = [];
    this.categoryError = false;
    this.batchError = false;
    this.announcementForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      text: [''],
      instituteId: [this.InstituteId],
      batchCodes: [],
      categories: [],
    });
    this.getInstitute(this.InstituteId);
    this.getAnnouncements(this.InstituteId);
  }

  getBatches(id: any) {
    this.api.getBatches(id).subscribe((data: any) => {
      this.batches = data.batch;
      if (this.edit || this.repeat) {
        this.getSingleAnnouncement(this.announcementId);
      } else {
        this.display = true;
      }
    });
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  getAnnouncements(id: any) {
    this.announceService.getAnnouncements(id).subscribe((data: any) => {
      this.announcements = data;
    });
  }

  getSingleAnnouncement(id: any) {
    this.announceService.getSingleAnnouncement(id).subscribe(
      (res: any) => {
        this.announcement = res;
        this.announcementForm.patchValue({
          title: res.title,
          date: res.date,
          text: res.text,
          batchCodes: res.batchCodes,
          categories: res.categories,
        });
        this.display = true;
      },
      (err: any) => {
        this.location.back();
      },
    );
  }

  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.file = file;
  }

  getInstitute(id: any) {
    this.api.getInstitute(id).subscribe((data: any) => {
      this.institute = data.institute;
      this.getBatches(this.InstituteId);
    });
  }

  check(event: any) {
    const batches = [];
    if (event) {
      this.batches.forEach((batch: any) => batches.push(batch.batchCode));
      this.announcementForm.patchValue({ batchCodes: batches });
    } else {
      this.announcementForm.patchValue({ batchCodes: batches });
    }
  }

  onSubmit() {
    this.announcementForm.markAllAsTouched();
    if (this.announcementForm.invalid) {
      this.showToast('top-right', 'danger', 'Fill announcement fields Correctly');
      return;
    } else if (this.announcementForm.value.batchCodes.length < 1) {
      this.showToast('top-right', 'danger', 'Select at least One Batch');
      return;
    } else if (this.announcementForm.value.categories.length < 1) {
      this.showToast('top-right', 'danger', 'Select at least One Category');
      return;
    }
    const announce = new FormData();
    announce.append('title', this.announcementForm.value.title);
    announce.append('date', this.announcementForm.value.date);
    announce.append('text', this.announcementForm.value.text);
    announce.append('instituteId', this.announcementForm.value.instituteId);
    announce.append('batchCodes', JSON.stringify(this.announcementForm.value.batchCodes));
    announce.append('categories', JSON.stringify(this.announcementForm.value.categories));
    if (this.file) {
      announce.append('announcement', this.file, this.announcementForm.value.title);
    }

    if (this.edit) {
      announce.append('_id', this.announcementId);
      this.announceService.editAnnouncement(announce).subscribe(
        (res) => {
          this.showToast('top-right', 'success', 'Announcement Edited Successfully');
          this.location.back();
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.err.message);
        },
      );
    } else if (this.repeat) {
      this.announceService.postAnnouncement(announce).subscribe(
        (res) => {
          this.showToast('top-right', 'success', 'Announcement Repeated Successfully');
          this.location.back();
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.err.message);
        },
      );
    } else {
      this.announceService.postAnnouncement(announce).subscribe(
        (res) => {
          this.showToast('top-right', 'success', 'Announcement Added Successfully');
          this.location.back();
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.err.message);
        },
      );
    }
  }

  onSelectBatch(batches: any[]) {
    if (batches.length === 0) {
      this.batchError = true;
    } else {
      this.batchError = false;
    }
  }

  onSelectCategory(categories: any[]) {
    if (categories.length === 0) {
      this.categoryError = true;
    } else {
      this.categoryError = false;
    }
  }

  onDelete(id: any) {
    this.announceService.deleteAnnouncement(id, this.InstituteId).subscribe(
      (res) => {
        const i = this.announcements.findIndex((e: any) => e._id === id);

        if (i !== -1) {
          this.announcements.splice(i, 1);
          this.showToast('top-right', 'success', 'Announcement Deleted Successfully');
        }
        this.getAnnouncements(this.InstituteId);
      },
      (err) => {
        this.showToast('top-right', 'danger', 'Announcement Deletion Failed');
      },
    );
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
