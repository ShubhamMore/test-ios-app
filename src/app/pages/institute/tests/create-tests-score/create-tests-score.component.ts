import { NbToastrService } from '@nebular/theme';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../../services/api.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ngx-create-tests-score',
  templateUrl: './create-tests-score.component.html',
  styleUrls: ['./create-tests-score.component.scss'],
})
export class CreateTestsScoreComponent implements OnInit {
  testId: string;
  instituteId: string;
  institute: any;
  students: any[];
  file: File;
  fileUpload: boolean;
  invalidFile: boolean;
  test: any = null;
  course: string;
  batch: string;
  marksError: boolean[] = [];
  display: boolean;
  studentScore: any[];
  sampleExcel: any;
  @ViewChild('fileInput', { static: false }) pickedFile: ElementRef;
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
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.test = null;
    this.display = false;
    this.sampleExcel = environment.server + '/sample/scores.xlsx';
    this.invalidFile = false;
    this.fileUpload = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((param) => {
      this.testId = param.test;
    });
    this.students = [];
    this.studentScore = [];
    this.getCourses(this.instituteId);
    this.getTest(this.testId);
  }

  changeFieUpload(event: any) {
    this.fileUpload = event;
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      if (this.testId) {
        this.getTest(this.testId);
      } else {
        this.location.back();
      }
    });
  }
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    const imgExt: string[] = ['xsl', 'xlsx', 'csv'];
    const ext = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
    if (!(imgExt.indexOf(ext) !== -1)) {
      this.invalidFile = true;
      return;
    }
    this.invalidFile = false;
    this.file = file;
  }
  uploadFile() {
    const scoreFile = new FormData();
    scoreFile.append('_id', this.test._id);
    scoreFile.append('batchName', this.batch);
    scoreFile.append('uploadfile', this.file, this.test.testName);

    this.api.addScoreUsingExcel(scoreFile).subscribe(
      (res) => {
        this.showToast('top-right', 'success', 'Score File Updated Successfully');
        this.location.back();
      },
      (err) => {
        this.showToast('top-right', 'danger', err.err.message);
      },
    );
  }

  getTest(id: string) {
    this.api.getSingleTest({ _id: id }).subscribe(
      (res: any) => {
        if (res) {
          this.test = res[0];
        }

        this.course = this.institute.course.find(
          (c: any) => c._id === this.test.courseId,
        ).courseCode;
        this.batch = this.institute.batch.find((b: any) => b._id === this.test.batchId).batchCode;
        if (this.test.students.length > 0) {
          this.studentScore = this.test.students;
        } else {
          this.getStudents(this.instituteId, this.test.batchId, this.test.courseId);
        }
        this.display = true;
      },
      (err) => {},
    );
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  getStudents(instituteID: string, batchId: string, courseId: string) {
    this.api.getStudentsByBatch(instituteID, courseId, batchId).subscribe((res: any[]) => {
      this.students = res;
      this.students.sort((student1, student2) => {
        if (student1.instituteDetails.rollNumber >= +student2.instituteDetails.rollNumber) {
          return 1;
        } else {
          return -1;
        }
      });

      this.studentScore = [];
      this.students.forEach((student) => {
        const scoreData = {
          studentId: student._id,
          studentName: student.basicDetails.name,
          rollNo: student.instituteDetails.rollNumber,
          batchCode: this.batch,
          marks: '',
        };

        this.marksError.push(false);

        this.studentScore.push(scoreData);
      });
    });
  }

  addMarks(event: any, i: number) {
    const mark = event.target.value;
    if (mark > this.test.totalMarks) {
      this.marksError[i] = true;
      return;
    }
    this.marksError[i] = false;
    this.studentScore[i].marks = mark;
  }

  saveMarks() {
    if (this.marksError.includes(true)) {
      this.showToast(
        'top-right',
        'danger',
        `Student test marks should be less than Total Marks ${this.test.totalMarks}`,
      );
      return;
    }

    this.api
      .addTestScore({ _id: this.test._id, batchName: this.batch, scores: this.studentScore })
      .subscribe(
        (res) => {
          this.showToast('top-right', 'success', 'Score Updated Successfully');
          this.location.back();
        },
        (err) => {
          this.showToast('top-right', 'danger', err.err.message);
        },
      );
  }

  getMonth(date: string) {
    const month = date.split('-')[1];
    return this.months[+month - 1];
  }

  getDay(date: string) {
    return date.split('-')[2];
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
}
