import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEventsComponent } from './stock-events.component';

describe('StockEventsComponent', () => {
  let component: StockEventsComponent;
  let fixture: ComponentFixture<StockEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockEventsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
