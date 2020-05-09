import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stock-events',
  templateUrl: './stock-events.component.html',
  styleUrls: ['./stock-events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockEventsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
