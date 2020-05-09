import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSeriesComponent } from './multiple-series.component';

describe('MultipleSeriesComponent', () => {
  let component: MultipleSeriesComponent;
  let fixture: ComponentFixture<MultipleSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleSeriesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
