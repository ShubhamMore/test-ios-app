import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ApiService } from '../../../services/api.service';
import { RoleAssignService } from '../../../services/role/role-assign.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'ngx-student-performance-report',
  templateUrl: './student-performance-report.component.html',
  styleUrls: ['./student-performance-report.component.scss'],
})
export class StudentPerformanceReportComponent implements OnInit {
  studentId: string;
  instituteId: string;
  students: any[];
  course: any;
  test: any;
  remarks: any;
  display: boolean;
  courses = [];
  studentScore: any[];
  batchId: string;
  showRemarksOption: boolean;
  courseId: string;
  noData: string = 'Select Course To View Data';
  @ViewChild('escClose', { read: TemplateRef, static: false }) escCloseTemplate: TemplateRef<
    HTMLElement
  >;
  @ViewChild('disabledEsc', { read: TemplateRef, static: false }) disabledEscTemplate: TemplateRef<
    HTMLElement
  >;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private toasterService: NbToastrService,
    private roleService: RoleAssignService,
    private studentService: StudentService,
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
    this.instituteId = this.route.snapshot.paramMap.get('id');
    this.studentId = this.studentService.getStudent()._id;

    this.getCourses();
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
  getCourses() {
    this.studentService.getStudentCoursesByInstitutes(this.instituteId).subscribe((res: any) => {
      this.courses = res;
      if (this.courses.length > 0) {
        this.course = this.courses[0];
        this.onSelectCourse(this.course);
      }
      this.display = true;
    });
  }
  onSelectCourse(course: any) {
    if (course) {
      this.courseId = course._id;
      this.batchId = course.batchId;
    }
    this.getRemarks();
    this.getScoreOfStudentByBatch();
  }
  getScoreOfStudentByBatch() {
    this.api
      .getScoreOfStudentByBatch({ studentId: this.studentId, batchId: this.batchId })
      .subscribe(
        (res: any) => {
          if (res) {
            this.test = res;
          }
          if (this.test && this.test.length === 0) {
            this.noData = 'No Data Found';
          }
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
          this.display = true;
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
