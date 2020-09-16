import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestsScoreComponent } from './create-tests-score.component';

describe('CreateTestsScoreComponent', () => {
  let component: CreateTestsScoreComponent;
  let fixture: ComponentFixture<CreateTestsScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTestsScoreComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
