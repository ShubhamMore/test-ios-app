import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleMentoringComponent } from './shedule-mentoring.component';

describe('SheduleMentoringComponent', () => {
  let component: SheduleMentoringComponent;
  let fixture: ComponentFixture<SheduleMentoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SheduleMentoringComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleMentoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
