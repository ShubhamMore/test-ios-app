import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // ======================= FIND USER ==============================
  //
  findEduatlasUser(id: string) {
    const url = `${environment.server}/institute/findEduatlasUser`;
    return this.http.post(url, { id }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  // =====================INSTITUTE API==============================

  getInstitutes() {
    return this.http
      .get(environment.server + '/institute/all')
      .pipe(tap(), catchError(this.handleError));
  }

  getDashboardInfo(id: string) {
    const url = `${environment.server}/institute/getDashboardInfo`;
    return this.http.post(url, { instituteId: id }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getInstitute(id: string) {
    const url = `${environment.server}/institute/oneInstitute/${id}`;
    return this.http.get<any>(url).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getInstituteStorage(id: string) {
    const url = `${environment.server}/institute/getInstituteStorage`;
    return this.http.post(url, { id }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  addInstitute(institute: any) {
    const postData = new FormData();
    const data = {
      basicInfo: {
        name: institute.name,
        instituteContact: institute.instituteContact,
      },
      address: {
        addressLine: institute.address.addressLine,
        locality: institute.address.locality,
        state: institute.address.state,
        city: institute.address.city,
        pincode: institute.address.pincode,
      },
      category: institute.category,
      metaTag: institute.instituteMetaTag,
    };

    postData.append('basicInfo', JSON.stringify(data.basicInfo));
    postData.append('address', JSON.stringify(data.address));
    postData.append('metaTag', JSON.stringify(institute.instituteMetaTag));
    postData.append('category', JSON.stringify(institute.category));
    postData.append('logo', institute.logo, institute.name);
    return this.http.post(environment.server + '/institute/addInstitute', postData).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((data: any) => {}),
      catchError(this.handleError),
    );
  }

  updateInstitute(id: string, institute: any) {
    const url = `${environment.server}/institute/updateInstitute/${id}`;

    const data = {
      basicInfo: {
        name: institute.name,
        instituteContact: +institute.instituteContact,
      },
      address: {
        addressLine: institute.address.addressLine,
        locality: institute.address.locality,
        state: institute.address.state,
        city: institute.address.city,
        pincode: institute.address.pincode,
      },
      category: institute.category,
      metaTag: institute.instituteMetaTag,
    };

    const postData = new FormData();
    postData.append('basicInfo', JSON.stringify(data.basicInfo));
    postData.append('address', JSON.stringify(data.address));
    postData.append('metaTag', JSON.stringify(institute.instituteMetaTag));
    postData.append('category', JSON.stringify(institute.category));

    if (institute.logo) {
      postData.append('logo', institute.logo, institute.name);
    }

    return this.http.put(url, postData).pipe(
      map(() => institute),
      catchError(this.handleError),
    );
  }

  activateInstitute(id: string, paymentDetails: any) {
    const url = environment.server + '/institute/activateInstitute';
    return this.http.post(url, { _id: id, paymentDetails }).pipe(catchError(this.handleError));
  }

  deleteInstitute(id: string) {
    const url = environment.server + '/institute/' + id;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  // =====================STUDENT API===================

  getCourseTD(id: string) {
    const url = `${environment.server}/institute/getCourseTD/${id}`;
    return this.http.get(url).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getCoursesOfStudentByInstitute(data: any) {
    const url = `${environment.server}/institute/student/getCoursesOfStudentByInstitute`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getStudentTestScheduleByInstitute(data: any) {
    const url = `${environment.server}/institute/student/getStudentTestScheduleByInstitute`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  //  ADD NEW STUDENT
  addStudent(student: any, instituteId: string) {
    const data = {
      basicDetails: {
        name: student.name,
        rollNumber: student.rollNo,
        studentEmail: student.studentEmail,
        studentContact: student.contact,
      },
      parentDetails: {
        name: student.parentName,
        parentContact: student.parentContact,
        parentEmail: student.parentEmail,
        address: student.address,
      },
      instituteDetails: {
        instituteId: instituteId,
        courseId: student.courseDetails.course,
        batchId: student.courseDetails.batch,
        rollNumber: student.courseDetails.rollNo,
        discount: student.courseDetails.discount,
        additionalDiscountType: student.courseDetails.additionalDiscountType,
        additionalDiscount: student.courseDetails.additionalDiscount,
        netPayable: student.courseDetails.netPayable,
        active: student.courseDetails.batch === '' ? false : true,
        materialRecord: student.materialRecord,
      },
    };

    return this.http.post(environment.server + '/institute/student/add', data).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  //  GET ONE STUDENT BY EDU-ATLAS ID
  getOneStudent(data: any) {
    return this.http
      .post(environment.server + '/institute/student/getOneStudent', { eduatlasId: data })
      .pipe(
        tap((res) => {}),
        map((res) => res),
        catchError(this.handleError),
      );
  }

  //  SEND OTP FOR GET STUDENT DETAILS
  sendOtpForGetUserDetails(eduId: any, role: any) {
    return this.http
      .post(environment.server + '/users/sendOtpForGetUserDetails', {
        eduAtlasId: eduId,
        role,
      })
      .pipe(
        tap((res) => {}),
        map((res) => res),
        catchError(this.handleError),
      );
  }

  // VERIFY OTP FOR GET USER DETAILS
  verifyUserOtp(data: any) {
    return this.http.post<any>(environment.server + '/users/verifyOTP', data).pipe(
      tap((res: any) => {
        return res;
      }),
      catchError(this.handleError),
    );
  }

  //  GET ONE STUDENT FOR EDITING AND VIEWING
  getOneStudentByInstitute(data: any) {
    return this.http
      .post(environment.server + '/institute/student/getOneStudentByInstitute', data)
      .pipe(
        tap((res) => {}),
        catchError(this.handleError),
      );
  }

  //  GET STUDENT BY INSTITUTE
  getStudentByInstitute(data: any) {
    return this.http
      .post(environment.server + '/institute/student/getStudentByInstitute', data)
      .pipe(
        tap((res) => {}),
        map((res) => res),
        catchError(this.handleError),
      );
  }

  //  GET ACTIVE STUDENTs
  getActiveStudents(id: string, courseId: string, batchId: string) {
    const data = { instituteId: id, courseId, batchId };
    return this.http.post(environment.server + '/institute/student/getActiveStudents', data).pipe(
      tap((res) => {}),
      catchError(this.handleError),
    );
  }

  //  GET PENDING STUDENTs
  getPendingStudents(id: string, courseId: string) {
    const data = { instituteId: id, courseId };
    return this.http.post(environment.server + '/institute/student/getPendingStudents', data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  //  ADD STUDENT COURSE
  addStudentCourse(student: any, instituteId: string, eduAtlasId: string) {
    const data = {
      eduAtlasId: eduAtlasId,

      instituteDetails: {
        instituteId: instituteId,
        courseId: student.courseDetails.course,
        batchId: student.courseDetails.batch,
        rollNumber: student.courseDetails.rollNo,
        discount: student.courseDetails.discount,
        additionalDiscountType: student.courseDetails.additionalDiscountType,
        additionalDiscount: student.courseDetails.additionalDiscount,
        netPayable: student.courseDetails.netPayable,
        active: student.courseDetails.batch === '' ? false : true,
        materialRecord: student.materialRecord,
      },
    };

    return this.http.post(environment.server + '/institute/student/addCourseStudent', data).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  //  UPDATE STUDENT COURSE
  updateStudentCourse(
    student: any,
    stdId: string,
    instObjId: string,
    instituteId: string,
    eduAtlasId: string,
  ) {
    const data = {
      studentId: stdId,
      eduAtlasId: eduAtlasId,
      instituteId: instObjId,
      instituteDetails: {
        instituteId: instituteId,
        courseId: student.courseDetails.course,
        batchId: student.courseDetails.batch,
        rollNumber: student.courseDetails.rollNo,

        discount: student.courseDetails.discount,
        additionalDiscountType: student.courseDetails.additionalDiscountType,
        additionalDiscount: student.courseDetails.additionalDiscount,
        netPayable: student.courseDetails.netPayable,
        active: student.courseDetails.batch === '' ? false : true,
        materialRecord: student.materialRecord,
      },
    };

    return this.http.post(environment.server + '/institute/student/updateStudentCourse', data).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  //  SEND ATTENDANCE
  sendAttendanceSms(data: any) {
    return this.http
      .post(environment.server + '/institute/attendance/sendAttendanceSMS', data)
      .pipe(
        tap((res) => {}),
        map((res) => res),
        catchError(this.handleError),
      );
  }

  //  UPDATE STUDENT PERSONAL DETAILS
  updateStudentPersonalDetails(
    id: string,
    student: any,
    eduAtlasId: any,
    studentContact: string,
    studentEmail: string,
  ) {
    const data = {
      _id: id,
      eduAtlasId: eduAtlasId,
      basicDetails: {
        name: student.name,
        studentEmail: studentEmail,
        studentContact: studentContact,
      },
      parentDetails: {
        name: student.parentName,
        parentContact: student.parentContact,
        parentEmail: student.parentEmail,
        address: student.address,
      },
    };

    return this.http
      .post(environment.server + '/institute/student/updateStudentPersonalDetails', data)
      .pipe(
        map(() => student),
        catchError(this.handleError),
      );
  }

  // STUDENT COURSE
  getStudentsByBatch(instituteId: string, courseId: string, batchId: string) {
    return this.http
      .post(environment.server + '/institute/student/getStudentsByBatch', {
        instituteId: instituteId,
        courseId: courseId,
        batchId: batchId,
      })
      .pipe(
        tap((res) => {}),
        catchError(this.handleError),
      );
  }

  // STUDENT COURSE
  getStudentsByInstitute(data: any) {
    return this.http
      .post(environment.server + '/institute/student/getStudentsByInstitute', data)
      .pipe(
        tap((res) => {}),
        catchError(this.handleError),
      );
  }

  //  DELETE STUDENT COURSE
  deleteStudentCourse(
    instituteDetailsObjId: string,
    eduAtlasId: string,
    instituteId: string,
    courseId: string,
    studentId: string,
  ) {
    return this.http
      .post(environment.server + '/institute/student/deleteStudentCourse', {
        _id: instituteDetailsObjId,
        eduatlasId: eduAtlasId,
        instituteId,
        courseId,
        studentId,
      })
      .pipe(
        tap((res) => {}),
        catchError(this.handleError),
      );
  }

  // =====================Fees API===================
  addStudentFees(
    studentObjId: string,
    studentInstituteId: string,
    studentEduAtlasId: string,
    studentCourseId: string,
    studentFees: any,
  ) {
    const data = {
      studentId: studentObjId,
      eduAtlasId: studentEduAtlasId,
      instituteId: studentInstituteId,
      courseId: studentCourseId,
      installmentType: studentFees.installmentType,
      date: studentFees.date,
      noOfInstallments: studentFees.noOfInstallments,
      amountCollected: studentFees.amountCollected,
      totalAmount: studentFees.totalAmount,
      pendingAmount: studentFees.pendingAmount,
      installments: [],
    };

    studentFees.installments.forEach((curInstallment: any) => {
      const installment = {
        installmentNo: curInstallment.installmentNo,
        paidStatus: curInstallment.paidStatus ? 'true' : 'false',
        paidOn: curInstallment.paidOn,
        amount: curInstallment.amount,
        paymentMode: curInstallment.paymentMode,
        bankDetails: curInstallment.bankDetails,
        transDetails: curInstallment.transDetails,
        paymentDate: curInstallment.paymentDate,
        amountPending: curInstallment.amountPending,
        receiptLink: curInstallment.receiptLink,
      };
      data.installments.push(installment);
    });

    const url = `${environment.server}/institute/fee/addFee`;
    return this.http.post(url, data).pipe(
      tap((res) => {}),
      catchError(this.handleError),
    );
  }

  updateStudentFees(feeObjId: string, studentFees: any) {
    const data = {
      _id: feeObjId,
      installmentType: studentFees.installmentType,
      date: studentFees.date,
      noOfInstallments: studentFees.noOfInstallments,
      amountCollected: studentFees.amountCollected,
      totalAmount: studentFees.totalAmount,
      pendingAmount: studentFees.pendingAmount,
      installments: [],
    };

    studentFees.installments.forEach((curInstallment: any) => {
      const installment = {
        installmentNo: curInstallment.installmentNo,
        paidStatus: curInstallment.paidStatus ? 'true' : 'false',
        paidOn: curInstallment.paidOn,
        amount: curInstallment.amount,
        paymentMode: curInstallment.paymentMode,
        bankDetails: curInstallment.bankDetails,
        transDetails: curInstallment.transDetails,
        paymentDate: curInstallment.paymentDate,
        amountPending: curInstallment.amountPending,
        receipt: curInstallment.receipt,
      };
      data.installments.push(installment);
    });

    const url = `${environment.server}/institute/fee/updateFeeOfStudent`;
    return this.http.post(url, data).pipe(
      tap((res) => {}),
      catchError(this.handleError),
    );
  }

  getStudentFees(
    studentObjId: string,
    studentInstituteId: string,
    studentEduAtlasId: string,
    studentCourseId: string,
  ) {
    const url = `${environment.server}/institute/getFees`;
    return this.http
      .post(url, {
        studentId: studentObjId,
        instituteId: studentInstituteId,
        eduatlasID: studentEduAtlasId,
        courseId: studentCourseId,
      })
      .pipe(
        tap((res: any) => {}),
        catchError(this.handleError),
      );
  }

  deleteStudentFees(id: string) {
    const url = `${environment.server}/institute/deleteFees`;
    return this.http.post(url, { _id: id }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  // =====================Employee API===================

  //  ADD NEW EMPLOYEE
  addEmployee(employee: any, instituteId: string) {
    const data = {
      basicDetails: {
        name: employee.name,
        employeeAddress: employee.address,
        employeeEmail: employee.employeeEmail,
        employeeContact: employee.contact,
      },
      instituteDetails: {
        instituteId: instituteId,
        role: employee.role,
      },
    };

    return this.http.post(environment.server + '/institute/employee/addEmployee', data).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  //  GET ONE EMPLOYEE BY EDU-ATLAS ID
  getOneEmployee(data: any) {
    return this.http
      .post(environment.server + '/institute/employee/getEmployeeByEduatlasId', {
        eduAtlasId: data,
      })
      .pipe(
        tap((res) => {}),
        map((res) => res),
        catchError(this.handleError),
      );
  }

  //  GET ONE EMPLOYEE FOR EDITING AND VIEWING
  getOneEmployeeByInstitute(data: any) {
    return this.http
      .post(environment.server + '/institute/employee/getOneEmployeeByInstitute', data)
      .pipe(
        tap((res) => {}),
        map((res) => res),
        catchError(this.handleError),
      );
  }

  //  GET EMPLOYEE INSTITUTES
  getEmployeeInstitutes(data: any) {
    return this.http
      .post(environment.server + '/institute/employee/getEmployeeInstitutes', data)
      .pipe(
        tap((res) => {}),
        map((res) => res),
        catchError(this.handleError),
      );
  }

  //  GET ONE EMPLOYEE BY EMAIL
  getEmployeesByEmail(data: any) {
    return this.http
      .post(environment.server + '/institute/employee/getEmployeesByEmail', data)
      .pipe(
        tap((res: any) => {}),
        map((res) => res),
        catchError(this.handleError),
      );
  }

  //  GET INSTITUTE EMPLOYEES
  getEmployeesByInstituteId(id: string) {
    const data = { instituteId: id };
    return this.http
      .post(environment.server + '/institute/employee/getEmployeesByInstituteId', data)
      .pipe(
        tap((res: any) => {}),
        catchError(this.handleError),
      );
  }

  // ADD INSTITUTE TO EMPLOYEE
  addEmployeeInstitute(eduId: string, instituteId: any, employee: any) {
    const data = {
      eduAtlasId: eduId,
      instituteDetails: {
        instituteId: instituteId,
        role: employee.role,
      },
    };
    return this.http
      .post(environment.server + '/institute/employee/addEmployeeInstitute', data)
      .pipe(
        tap((res: any) => {}),
        catchError(this.handleError),
      );
  }

  // UPDATE EMPLOYEE Role Details
  updateEmployeeInstituteDetails(employeeObjectId: string, instituteId: string, role: string) {
    const data = {
      empId: employeeObjectId,
      instituteDetails: {
        role: role,
        instituteId: instituteId,
      },
    };
    return this.http
      .post(environment.server + '/institute/employee/updateEmployeeInstituteDetails', data)
      .pipe(
        map(() => {}),
        catchError(this.handleError),
      );
  }

  //  UPDATE EMPLOYEE PERSONAL DETAILS
  updateEmployeePersonalDetails(id: string, employee: any, eduAtlasId: any) {
    const data = {
      _id: id,
      eduAtlasId: eduAtlasId,
      basicDetails: {
        name: employee.name,
        rollNumber: employee.rollNo,
        employeeEmail: employee.employeeEmail,
        employeeContact: employee.contact,
      },
    };
    return this.http
      .post(environment.server + '/institute/student/updateStudentPersonalDetails', data)
      .pipe(
        map(() => employee),
        catchError(this.handleError),
      );
  }

  //  DELETE STUDENT COURSE
  deleteEmployeeInstitute(instituteId: string, eduAtlasId: string) {
    return this.http
      .post(environment.server + '/institute/employee/deleteEmployeeInstitute', {
        instituteId: instituteId,
        empId: eduAtlasId,
      })
      .pipe(
        tap((res) => {}),
        catchError(this.handleError),
      );
  }

  /* ********************* ONLY FOR E-COMMERCE ****************** */

  getStudent(data: any) {
    return this.http.post(environment.server + '/institute/student/getStudent', data).pipe(
      tap((res) => {}),
      map((res: any) => res.student),
      catchError(this.handleError),
    );
  }

  deleteStudent(param: any) {
    return this.http
      .delete(environment.server + '/institute/student/', {
        params: param,
      })
      .pipe(catchError(this.handleError));
  }

  getStudents(instituteId) {
    const url = `${environment.server}/institute/student/all/${instituteId}`;
    return this.http.get(url).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getPendingFeeByInstitute(instituteId: any) {
    const url = `${environment.server}/institute/fee/getPendingFeeByInstitute`;
    return this.http.post(url, { instituteId }).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  // ========================COURSE API=====================

  getCourses(id: any) {
    return this.http.get(`${environment.server}/institute/course/all/${id}`).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  addCourse(id: string, course: any) {
    return this.http.post(`${environment.server}/institute/course/addCourse/${id}`, course).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getCourse(params: any) {
    return this.http
      .get(environment.server + '/institute/course/one', {
        params: params,
      })
      .pipe(catchError(this.handleError));
  }

  updateCourse(params: any, course: any) {
    return this.http
      .patch(environment.server + '/institute/course/', course, {
        params: params,
      })
      .pipe(
        map(() => course),
        catchError(this.handleError),
      );
  }

  deleteCourse(param: any) {
    return this.http
      .delete(environment.server + '/institute/course/course/', {
        params: param,
      })
      .pipe(catchError(this.handleError));
  }

  // =====================BATCHES API=================

  getBatches(branchId: string) {
    return this.http.get(`${environment.server}/institute/course/batches/${branchId}`).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getBatch(params: any) {
    return this.http
      .get(environment.server + '/institute/course/batch/', {
        params: params,
      })
      .pipe(catchError(this.handleError));
  }

  addBatch(branchId: string, batch: any) {
    return this.http
      .post(`${environment.server}/institute/course/addBatch/${branchId}`, batch)
      .pipe(
        tap((res: any) => {}),
        catchError(this.handleError),
      );
  }

  deleteBatch(params: any) {
    return this.http
      .delete(environment.server + '/institute/course/batch/', {
        params: params,
      })
      .pipe(catchError(this.handleError));
  }

  updateBatch(params: any, batch: any) {
    return this.http
      .patch(environment.server + '/institute/course/batch/', batch, {
        params: params,
      })
      .pipe(
        map(() => batch),
        catchError(this.handleError),
      );
  }

  // =======================DISCOUNT API======================

  getDiscounts(id: string) {
    return this.http.get(`${environment.server}/institute/course/discounts/${id}`).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getDiscount(params: any) {
    return this.http
      .get(environment.server + '/institute/course/discount', {
        params: params,
      })
      .pipe(catchError(this.handleError));
  }

  addDiscount(id: string, discount: any) {
    return this.http
      .post(`${environment.server}/institute/course/addDiscount/${id}`, discount)
      .pipe(
        tap((res: any) => {}),
        catchError(this.handleError),
      );
  }

  deleteDiscount(params: any) {
    return this.http
      .delete(environment.server + '/institute/course/discount/', {
        params: params,
      })
      .pipe(catchError(this.handleError));
  }

  updateDiscount(params: any, discount: any) {
    return this.http
      .patch(environment.server + '/institute/course/discount/', discount, {
        params: params,
      })
      .pipe(
        map(() => discount),
        catchError(this.handleError),
      );
  }

  // ==========================RECEIPT API====================

  getReceipt(id: string) {
    return this.http.get(`${environment.server}/institute/course/reciept/${id}`).pipe(
      map((data: any) => data.reciept),
      catchError(this.handleError),
    );
  }

  addReceipt(id: string, receipt: any) {
    receipt.id = null;
    return this.http.post(`${environment.server}/institute/course/addReciept/${id}`, receipt).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  updateReceipt(id: string, reciept: any) {
    const url = `${environment.server}/institute/course/reciept/${id}`;
    return this.http.patch(url, reciept).pipe(
      map(() => reciept),
      catchError(this.handleError),
    );
  }

  deleteReceipt(id: string) {
    return this.http
      .delete(`${environment.server}/institute/course/reciept/${id}`)
      .pipe(catchError(this.handleError));
  }

  // =====================Attendance API===================

  // GET STUDENTS FOR ATTENDANCE
  getStudentsAttendance(attendanceRequest: any) {
    const url = `${environment.server}/institute/attendance/getAttendanceByDate`;
    return this.http.post(url, attendanceRequest).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getAttendanceByInstitute(attendanceRequest: any) {
    const url = `${environment.server}/institute/attendance/getAttendanceByInstitute`;
    return this.http.post(url, attendanceRequest).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getAttendanceForStudent(data: any) {
    const url = `${environment.server}/institute/attendance/getAttendanceForStudent`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getStudentAttendanceByCourse(data: any) {
    const url = `${environment.server}/institute/attendance/getAttendanceForStudentByCourse`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  addAttendance(attendanceRequest: any) {
    const url = `${environment.server}/institute/attendance/addAttendance`;
    return this.http.post(url, attendanceRequest).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getAttendanceByDate(attendanceRequest: any) {
    const url = `${environment.server}/institute/attendance/getAttendanceByDate`;
    return this.http.post(url, attendanceRequest).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  attendanceByFile(attendanceRequest: any) {
    const url = `${environment.server}/institute/attendance/attendanceByFile`;
    return this.http.post(url, attendanceRequest).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  // =====================Online Classes API===================

  addCredentials(data: any) {
    const url = `${environment.server}/institute/zoom/addCredentials`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getCredentials() {
    const url = `${environment.server}/institute/zoom/getCredentials`;
    return this.http.get(url).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getZoomAuth(data: any) {
    const url = `${environment.server}/institute/zoom/getZoomAuth`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getAllMeetings() {
    const url = `${environment.server}/institute/zoom/getAllMeetings`;
    return this.http.post(url, {}).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  notifyMeeting(data) {
    const url = `${environment.server}/institute/zoom/notifyMeeting`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  deleteMeeting(data) {
    const url = `${environment.server}/institute/zoom/deleteMeeting`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  updateMeeting(data) {
    const url = `${environment.server}/institute/zoom/updateMeeting`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  createMeeting(data) {
    const url = `${environment.server}/institute/zoom/createMeeting`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getOneMeeting(data) {
    const url = `${environment.server}/institute/zoom/getOneMeeting`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getMeetingByBatch(data: any) {
    const url = `${environment.server}/institute/zoom/getMeetingsFromZoom`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  listAllRecordedMeetings(data) {
    const url = `${environment.server}/institute/zoom/listAllRecordedMeetings`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  /****************   TESTS   ****************** */
  getTestByInstitute(data: any) {
    const url = `${environment.server}/institute/tests/getTestByInstitute`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  addTest(data: any) {
    const url = `${environment.server}/institute/tests/addTest`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getSingleTest(data: any) {
    const url = `${environment.server}/institute/tests/getSingleTest`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  updateTest(data: any) {
    const url = `${environment.server}/institute/tests/updateTest`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  addScoreUsingExcel(data: any) {
    const url = `${environment.server}/institute/tests/addScoreUsingExcel
    `;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  addTestScore(data: any) {
    const url = `${environment.server}/institute/tests/addTestScore`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getTestByStudent(data: any) {
    const url = `${environment.server}/institute/tests/getTestByStudent`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  deleteTest(data: any) {
    const url = `${environment.server}/institute/tests/deleteTest`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  /****************   Test Reports   ****************** */
  getTestsForReports(data: any) {
    const url = `${environment.server}/institute/tests/getTestsForReports`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getScoresOfStutdentByInstitute(data: any) {
    const url = `${environment.server}/institute/tests/getScoresOfStutdentByInstitute`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getScoreOfStudentByBatch(data: any) {
    const url = `${environment.server}/institute/tests/getScoreOfStudentByBatch`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getRemarkOfStudentByInstitute(data: any) {
    const url = `${environment.server}/institute/remark/getRemarkOfStudentByInstitute`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  addRemark(data: any) {
    const url = `${environment.server}/institute/remark/addRemark`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  /****************   Schedule PTMs   ****************** */
  addPtm(data: any) {
    const url = `${environment.server}/institute/ptm/addPtm`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getPtmByInstitute(data: any) {
    const url = `${environment.server}/institute/ptm/getPtmOfInstitutes`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getSinglePtm(data: any) {
    const url = `${environment.server}/institute/ptm/getSinglePtm`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  updatePtm(data: any) {
    const url = `${environment.server}/institute/ptm/updatePtm`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  deletePtm(data: any) {
    const url = `${environment.server}/institute/ptm/deletePtm`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  /**************** MENTORING **************** */

  addMentoring(data: any) {
    const url = `${environment.server}/institute/mentoring/addMentoring`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  updateMentoring(data: any) {
    const url = `${environment.server}/institute/mentoring/updateMentoring`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  deleteMentoring(data: any) {
    const url = `${environment.server}/institute/mentoring/deleteMentoring`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getMentorings(data: any) {
    const url = `${environment.server}/institute/mentoring/getMentoringOfStudentByInstitute`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  // =====================Leads API==============================
  addLead(data: any) {
    const url = `${environment.server}/institute/leads/addLead`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  updateLead(data: any) {
    const url = `${environment.server}/institute/leads/updateLead`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  deleteLead(data: any) {
    const url = `${environment.server}/institute/leads/deleteLead`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getSingleLead(data: any) {
    const url = `${environment.server}/institute/leads/getSingleLead`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getSingleLeadToView(data: any) {
    const url = `${environment.server}/institute/leads/getSingleLeadToView`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getLeadsByOfInstitute(data: any) {
    const url = `${environment.server}/institute/leads/getLeadsByOfInstitute`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  // =====================Forum API==============================
  addForum(data: any) {
    const url = `${environment.server}/institute/forum/addForum `;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  updateForum(data: any) {
    const url = `${environment.server}/institute/forum/updateForum`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  deleteForum(data: any) {
    const url = `${environment.server}/institute/forum/deleteForum`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getSingleForum(data: any) {
    const url = `${environment.server}/institute/forum/getSingleForum`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getForumsByInstitute(data: any) {
    const url = `${environment.server}/institute/forum/getForumsByInstitute`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getMyForum(data: any) {
    const url = `${environment.server}/institute/forum/getMyForum`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  addComment(data: any) {
    const url = `${environment.server}/institute/forum/addComment`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  deleteComment(data: any) {
    const url = `${environment.server}/institute/forum/deleteComment`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  // =====================Chat Apis==============================
  getChatMembers() {
    const url = `${environment.server}/institute/chats/getMembers`;
    return this.http.post(url, {}).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  getChats(data: any) {
    const url = `${environment.server}/institute/chats/getChats`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  // =====================Notification Apis==============================
  getNotifications() {
    const url = `${environment.server}/institute/notification/getNotifications`;
    return this.http.post(url, {}).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  deleteNotification(data: any) {
    const url = `${environment.server}/institute/notification/deleteNotification`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }
  seenNotification(data: any) {
    const url = `${environment.server}/institute/notification/seenNotification`;
    return this.http.post(url, data).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  /********************** STUDY MATERIAL ********************* */
  editStudyMaterial(StudyMaterial: any) {
    return this.http
      .post(`${environment.server}/institute/studyMaterial/editStudyMaterial`, StudyMaterial)
      .pipe(
        tap((response) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  addStudyMaterial(StudyMaterial: any) {
    return this.http
      .post(`${environment.server}/institute/studyMaterial/addStudyMaterial`, StudyMaterial)
      .pipe(
        tap((response) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  getStudyMaterials(data: any) {
    return this.http
      .post(`${environment.server}/institute/studyMaterial/getStudyMaterial`, data)
      .pipe(
        tap((res) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  getSingleStudyMaterial(id: any) {
    return this.http
      .post(`${environment.server}/institute/studyMaterial/getSingleStudyMaterial`, {
        id,
      })
      .pipe(
        tap((res) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  deleteStudyMaterial(id: any, instituteId: string) {
    return this.http
      .post<any>(`${environment.server}/institute/studyMaterial/deleteStudyMaterial`, {
        _id: id,
        instituteId,
      })
      .pipe(
        tap((res) => {}),
        catchError((err) => this.handleError(err)),
      );
  }

  /*************** Error Handler *************** */

  private handleError(error: any) {
    return throwError(error);
  }
}
