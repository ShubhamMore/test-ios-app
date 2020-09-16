import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAdminCouponsComponent } from './save-admin-coupons.component';

describe('SaveAdminCouponsComponent', () => {
  let component: SaveAdminCouponsComponent;
  let fixture: ComponentFixture<SaveAdminCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaveAdminCouponsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAdminCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
