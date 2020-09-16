import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { NbToastrService } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-study-material',
  templateUrl: './study-material.component.html',
  styleUrls: ['./study-material.component.scss'],
})
export class StudyMaterialComponent implements OnInit {
  display: boolean;
  materials: any[];
  material: any;
  instituteId: any;
  institute: any;
  edit: any;
  studyMaterialId: any;

  file: File;

  materialForm: FormGroup;
  courses: any[];
  courseError: boolean;
  batchError: boolean;
  batches: any[];

  videoUrl: boolean;

  constructor(
    private fb: FormBuilder,
    private toastrService: NbToastrService,
    private api: ApiService,
    private active: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.display = false;
    this.materials = [];
    this.courses = [];
    this.batches = [];
    this.videoUrl = false;
    this.material = null;
    this.institute = null;
    this.edit = null;
    this.studyMaterialId = null;
    this.file = null;
    this.courseError = false;
    this.batchError = false;

    this.instituteId = this.active.snapshot.paramMap.get('id');
    this.materialForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      link: ['', Validators.required],
      instituteId: [this.instituteId],
      courseId: [],
      batches: [],
    });
    this.getCourses(this.instituteId);
    this.onSelectCourse('all');
  }

  getCourses(id: string) {
    this.api.getCourseTD(id).subscribe((data: any) => {
      this.institute = data;
      this.courses = data.course;
      this.display = true;
    });
  }

  cancelEdit() {
    this.material = null;
    this.videoUrl = false;
    this.edit = false;
    this.studyMaterialId = null;
    this.materialForm.reset({ courseId: [], batches: [] });
    this.batches = [];
  }

  editMaterial(i: any) {
    this.edit = true;
    this.material = this.materials[i];
    this.studyMaterialId = this.material._id;
    this.materialForm.patchValue({
      title: this.material.title,
      category: this.material.category,
      courseId: this.material.courseId,
      instituteId: this.material.instituteId,
    });
    this.onSelectFormCourse(this.material.courseId);
    this.materialForm.patchValue({
      batches: this.material.batches,
    });
    if (this.material.category === 'LEARNING VIDEO') {
      this.videoUrl = true;
    } else {
      this.videoUrl = false;
    }
    setTimeout(() => {
      this.materialForm.patchValue({
        link: this.videoUrl ? this.material.file.secure_url : '',
      });
    }, 200);
  }

  onFilePicked(event: Event) {
    if (!this.videoUrl) {
      const file = (event.target as HTMLInputElement).files[0];
      this.file = file;
    }
  }

  onSelectCourse(id: string) {
    if (id === 'all') {
      this.getStudyMaterial({ instituteId: this.instituteId });
    } else {
      this.getStudyMaterial({ instituteId: this.instituteId, courseId: id });
    }
  }

  onSelectFormCourse(courseIds: any[]) {
    if (courseIds.length === 0) {
      this.courseError = true;
    } else {
      this.courseError = false;
    }
    this.batches = [];
    this.courses.forEach((course: any) => {
      if (courseIds.includes(course.courseCode)) {
        const batches = this.institute.batch.filter((b: any) => b.course === course._id);
        this.batches.push(...batches);
      }
    });

    this.materialForm.patchValue({ batches: this.batches });
  }

  onSelectFormBatch() {
    if (!this.materialForm.value.batches || this.materialForm.value.courseId.batches === 0) {
      this.batchError = true;
    } else {
      this.batchError = false;
    }
  }

  onSelectCategory(event: any) {
    if (event === 'LEARNING VIDEO') {
      this.videoUrl = true;
    } else {
      this.videoUrl = false;
    }
  }

  openUrl(url: any) {
    window.open(url, '_system');
  }

  getStudyMaterial(data: any) {
    this.api.getStudyMaterials(data).subscribe(
      (res: any) => {
        this.materials = res;
      },
      (err: any) => {},
    );
  }

  check(event: any) {
    const batches = [];
    if (event) {
      this.batches.forEach((batch: any) => batches.push(batch.batchCode));
      this.materialForm.patchValue({ batches });
    } else {
      this.materialForm.patchValue({ batches });
    }
  }

  deleteMaterial(id: any) {
    this.api.deleteStudyMaterial(id, this.instituteId).subscribe(
      (res: any) => {
        const i = this.materials.findIndex((e: any) => e._id === id);
        if (i !== -1) {
          this.materials.splice(i, 1);
          this.showToast('top-right', 'success', 'Study Material Deleted Successfully');
        }
      },
      (err: any) => {
        this.showToast('top-right', 'danger', 'Study Material Deletion Failed');
      },
    );
  }

  addMaterial() {
    this.materialForm.markAllAsTouched();
    if (!this.materialForm.value.courseId || this.materialForm.value.courseId.length === 0) {
      this.courseError = true;
    } else {
      this.courseError = false;
    }

    if (!this.materialForm.value.batches || this.materialForm.value.courseId.batches === 0) {
      this.batchError = true;
    } else {
      this.batchError = false;
    }

    if (this.courseError || this.batchError) {
      return;
    }

    if (this.videoUrl && this.materialForm.value.link === '') {
      this.showToast('top-right', 'warning', 'Video Url is Required');
      return;
    } else if (!this.videoUrl && !this.file) {
      if (!this.edit) {
        this.showToast('top-right', 'warning', 'File is Required');
        return;
      }
    }

    const material = new FormData();
    material.append('title', this.materialForm.value.title);
    material.append('category', this.materialForm.value.category);
    material.append('instituteId', this.instituteId);
    material.append('courseId', JSON.stringify(this.materialForm.value.courseId));
    material.append('batches', JSON.stringify(this.materialForm.value.batches));
    if (this.file) {
      material.append('studyMaterial', this.file, this.materialForm.value.title);
    } else {
      material.append('link', this.materialForm.value.link);
    }

    if (this.edit) {
      material.append('_id', this.studyMaterialId);
      this.api.editStudyMaterial(material).subscribe(
        (res) => {
          this.showToast('top-right', 'success', 'Study Material Edited Successfully');
          this.cancelEdit();
          this.ngOnInit();
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.err.message);
        },
      );
    } else {
      this.api.addStudyMaterial(material).subscribe(
        (res) => {
          this.showToast('top-right', 'success', 'Study Material Added Successfully');
          this.cancelEdit();
          this.ngOnInit();
        },
        (err: any) => {
          this.showToast('top-right', 'danger', err.err.message);
        },
      );
    }
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
