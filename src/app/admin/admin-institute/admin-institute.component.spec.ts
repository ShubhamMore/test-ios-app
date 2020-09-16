import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstituteComponent } from './admin-institute.component';

describe('AdminInstituteComponent', () => {
  let component: AdminInstituteComponent;
  let fixture: ComponentFixture<AdminInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInstituteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
