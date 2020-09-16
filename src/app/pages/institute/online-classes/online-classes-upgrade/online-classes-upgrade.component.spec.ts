import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassesUpgradeComponent } from './online-classes-upgrade.component';

describe('OnlineClassesUpgradeComponent', () => {
  let component: OnlineClassesUpgradeComponent;
  let fixture: ComponentFixture<OnlineClassesUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineClassesUpgradeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassesUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
