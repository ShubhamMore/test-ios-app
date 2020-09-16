import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInstituteComponent } from './manage-institute.component';

describe('ManageInstituteComponent', () => {
  let component: ManageInstituteComponent;
  let fixture: ComponentFixture<ManageInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageInstituteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
