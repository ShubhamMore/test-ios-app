import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAdminSmsPackComponent } from './save-admin-sms-pack.component';

describe('SaveAdminSmsPackComponent', () => {
  let component: SaveAdminSmsPackComponent;
  let fixture: ComponentFixture<SaveAdminSmsPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaveAdminSmsPackComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAdminSmsPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
