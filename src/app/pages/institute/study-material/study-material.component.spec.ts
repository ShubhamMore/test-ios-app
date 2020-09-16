import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialComponent } from './study-material.component';

describe('StudyMaterialComponent', () => {
  let component: StudyMaterialComponent;
  let fixture: ComponentFixture<StudyMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudyMaterialComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
