import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendlinesComponent } from './trendlines.component';

describe('TrendlinesComponent', () => {
  let component: TrendlinesComponent;
  let fixture: ComponentFixture<TrendlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrendlinesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
