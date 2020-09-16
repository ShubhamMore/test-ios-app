import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSavePlanComponent } from './admin-save-plan.component';

describe('AdminSavePlanComponent', () => {
  let component: AdminSavePlanComponent;
  let fixture: ComponentFixture<AdminSavePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSavePlanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSavePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
