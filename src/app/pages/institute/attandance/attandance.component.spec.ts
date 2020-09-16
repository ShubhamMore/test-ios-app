import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandanceComponent } from './attandance.component';

describe('AttandanceComponent', () => {
  let component: AttandanceComponent;
  let fixture: ComponentFixture<AttandanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttandanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttandanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
