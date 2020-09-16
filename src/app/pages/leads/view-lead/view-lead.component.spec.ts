import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeadComponent } from './view-lead.component';

describe('ViewLeadComponent', () => {
  let component: ViewLeadComponent;
  let fixture: ComponentFixture<ViewLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLeadComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
