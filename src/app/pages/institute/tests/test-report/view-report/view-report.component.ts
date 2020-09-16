import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Location } from '@angular/common';
import { AuthService } from '../../../../../services/auth-services/auth.service';
import { RoleAssignService } from '../../../../../services/role/role-assign.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss'],
})
export class ViewReportComponent implements OnInit {
  studentId: string;
  instituteId: string;
  institute: any;
  students: any[];
  file: File;
  invalidFile: boolean;
  test: any;
  remarks: any;
  course: string;
  batch: string;
  display: boolean;
  studentScore: any[];
  batchId: string;
  showRemarksOption: boolean;
  courseId: string;
  addRemarkForm: FormGroup;
  @ViewChild('escClose', { read: TemplateRef, static: false }) escCloseTemplate: TemplateRef<
    HTMLElement
  >;
  @ViewChild('disabledEsc', { read: TemplateRef, static: false }) disabledEscTemplate: TemplateRef<
    HTMLElement
  >;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location,
    private toasterService: NbToastrService,
    private roleService: RoleAssignService,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
          },
        },
      ],
    },
  };
  public barChartLabels = [];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [];
  public chartColors: any[] = [
    {
      borderColor: ['#FFD500'],
      backgroundColor: ['rgba(250,214,1,0.1)'],
    },
    {
      borderColor: ['#EA596B'],
      backgroundColor: ['rgba(239,86,107,0.1)'],
    },
    {
      borderColor: ['#30BD9A'],
      backgroundColor: ['rgba(48,189,154,0.1)'],
    },
    {
      borderColor: ['#009BCC'],
      backgroundColor: ['rgba(0,154,204,0.1)'],
    },
  ];

  ngOnInit() {
    this.display = false;
    this.invalidFile = false;
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((param) => {
      this.studentId = param.studentId;
      this.batchId = param.batchId;
      this.courseId = param.courseId;
    });
    this.getRemarks();

    this.getCourses(this.instituteId);
    this.students = [];
    this.studentScore = [];
    if (
      this.roleService.getEmployeeRole(this.instituteId) &&
      this.roleService.getEmployeeRole(this.instituteId) === 'Teacher'
    ) {
      this.showRemarksOption = true;
    } else {
      this.showRemarksOption = false;
    }

    this.addRemarkForm = this.fb.group({
      remark: ['', Validators.required],
      suggestion: [''],
    });
  }
  get f() {
    return this.addRemarkForm.controls;
  }
  getRemarks() {
    const data = {
      instituteId: this.instituteId,
      courseId: this.courseId,
      batchId: this.batchId,
      studentId: this.studentId,
    };
    this.api.getRemarkOfStudentByInstitute(data).subscribe((res: any) => {
      this.remarks = res;
    });
  }
  addRemark() {
    this.addRemarkForm.markAllAsTouched();
    if (this.addRemarkForm.valid) {
      const remarkObj = {
        instituteId: this.instituteId,
        courseId: this.courseId,
        batchId: this.batchId,
        teacherId: this.authService.getUser()._id,
        remark: this.addRemarkForm.get('remark').value,
        suggestion: this.addRemarkForm.get('suggestion').value,
      };
      const data = {
        studentId: this.studentId,
        remarks: [remarkObj],
      };
      this.api.addRemark(data).subscribe((res: any) => {
        this.addRemarkForm.reset();
        this.getRemarks();
      });
    } else {
    }
  }
  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      if (this.studentId) {
        this.getScoreOfStudentByBatch(this.studentId);
      } else {
        this.location.back();
      }
    });
  }

  getScoreOfStudentByBatch(id: string) {
    this.api.getScoreOfStudentByBatch({ studentId: id, batchId: this.batchId }).subscribe(
      (res: any) => {
        if (res) {
          this.test = res;
        }
        this.course = this.institute.course.find(
          (c: any) => c._id === this.test[0].courseId,
        ).courseCode;
        this.batch = this.institute.batch.find(
          (b: any) => b._id === this.test[0].batchId,
        ).batchCode;

        this.display = true;
        res.sort((test1, test2) => {
          const test1Date = new Date(test1.date);
          const test2Date = new Date(test2.date);
          if (test1Date > test2Date) {
            return 1;
          } else {
            return -1;
          }
        });
        this.generateGraph();
      },
      (err) => {},
    );
  }

  generateGraph() {
    const percentageArray = [];
    const highestArray = [];
    const lowestArray = [];
    const averageArray = [];
    const labelsArray = [];
    this.test.forEach((test) => {
      if (!test.hide) {
        test.students.studentPercentage
          ? percentageArray.push(test.students.studentPercentage)
          : percentageArray.push(0);
        test.highestPercentage ? highestArray.push(test.highestPercentage) : highestArray.push(0);
        test.lowestPercentage ? lowestArray.push(test.lowestPercentage) : lowestArray.push(0);
        test.averagePercentage ? averageArray.push(test.averagePercentage) : averageArray.push(0);
        labelsArray.push(test.testName + '(' + test.date + ')');
      }
    });
    this.barChartLabels = labelsArray;
    this.barChartType = 'line';
    this.barChartLegend = true;
    this.barChartData = [
      { data: highestArray, label: 'HIGHEST' },
      { data: lowestArray, label: 'LOWEST' },
      { data: averageArray, label: 'AVERAGE' },
      { data: percentageArray, label: 'STUDENT MARKS' },
    ];
  }

  changeGraph(singleTest, checkBoxValue) {
    singleTest.hide = !checkBoxValue;
    this.generateGraph();
  }
  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, { position, status });
  }
  constructDate(dateInMillisecond: number) {
    const date = new Date(dateInMillisecond);
    return `${date.getFullYear()}-${this.appendZero(date.getMonth() + 1)}-${this.appendZero(
      date.getDate(),
    )}`;
  }
  appendZero(n: number): string {
    if (n < 10) {
      return '0' + n;
    }
    return '' + n;
  }
}
