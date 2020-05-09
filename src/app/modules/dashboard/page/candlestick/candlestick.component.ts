import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {
  IStockChartEventArgs,
  ChartTheme,
  ITooltipRenderEventArgs,
  IAxisLabelRenderEventArgs
} from '@syncfusion/ej2-angular-charts';
import { DashboardService } from '@app/service/dashboard.service';
import { chartData } from '@data/schema/indicator-data';

@Component({
  selector: 'app-candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.scss']
})
export class CandlestickComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  public title: string = 'STATE BANK OF INDIA';
  public titleStyle: object = { color: 'black' };
  public tooltip: object = { enable: true };
  public data1: Object[] = chartData;

  constructor(private dashboardService: DashboardService) {
    this.dashboardService
      .GetSecurityStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        const dataObj = data.map(d => ({
          close: d.close,
          high: d.high,
          low: d.low,
          open: d.open,
          volume: d.volume,
          x: new Date(d.x)
        }));
        this.data1 = dataObj;
        console.log(this.data1, '{++++}');
      });
  }

  ngOnInit() {
    this.dashboardService
      .GetSecurities()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {});
  }

  public primaryXAxis: Object = {
    valueType: 'DateTime',
    majorGridLines: { width: 0 },
    crosshairTooltip: { enable: true }
  };

  public primaryYAxis: Object = {
    lineStyle: { color: 'transparent' },
    majorTickLines: { color: 'transparent', width: 0 }
  };

  public chartArea: Object = {
    border: {
      width: 0
    }
  };

  public crosshair: Object = {
    enable: true
  };

  public tooltipRender(args: ITooltipRenderEventArgs): void {
    if (args.text.split('<br/>')[4]) {
      let target: number = parseInt(
        args.text
          .split('<br/>')[4]
          .split('<b>')[1]
          .split('</b>')[0],
        10
      );
      let value: string = (target / 100000000).toFixed(1) + 'B';
      args.text = args.text.replace(
        args.text
          .split('<br/>')[4]
          .split('<b>')[1]
          .split('</b>')[0],
        value
      );
    }
  }

  public axisLabelRender(args: IAxisLabelRenderEventArgs): void {
    let text: number = parseInt(args.text, 10);
    if (args.axis.name === 'primaryYAxis') {
      args.text = text / 100000000 + 'B';
    }
  }

  public load(args: IStockChartEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.stockChart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(
        /-dark/i,
        'Dark'
      )
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
