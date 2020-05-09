import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeSelectorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
