import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSmsPackComponent } from './admin-sms-pack.component';

describe('AdminSmsPackComponent', () => {
  let component: AdminSmsPackComponent;
  let fixture: ComponentFixture<AdminSmsPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSmsPackComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSmsPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
