import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerDayUsageFormComponent } from './per-day-usage-form.component';

describe('PerDayUsageFormComponent', () => {
  let component: PerDayUsageFormComponent;
  let fixture: ComponentFixture<PerDayUsageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerDayUsageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerDayUsageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
