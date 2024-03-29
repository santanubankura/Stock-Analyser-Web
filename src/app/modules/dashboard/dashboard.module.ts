import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { SharedModule } from '@shared/shared.module';
import { CandlestickComponent } from './page/candlestick/candlestick.component';
import { InteractiveComponent } from './page/interactive/interactive.component';
import { MultipleSeriesComponent } from './page/multiple-series/multiple-series.component';
import { RangeSelectorComponent } from './page/range-selector/range-selector.component';
import { TrendlinesComponent } from './page/trendlines/trendlines.component';
import { StockEventsComponent } from './page/stock-events/stock-events.component';
import {
  StockChartAllModule,
  ChartAnnotationService,
  RangeNavigatorAllModule,
  ChartAllModule
} from '@syncfusion/ej2-angular-charts';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { FinancialChartComponent } from './page/financial-chart/financial-chart.component';
import { FinancialDataService } from '../../shared/service/financial-data.service';

@NgModule({
  declarations: [
    CandlestickComponent,
    InteractiveComponent,
    MultipleSeriesComponent,
    RangeSelectorComponent,
    TrendlinesComponent,
    StockEventsComponent,
    FinancialChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    StockChartAllModule,
    ChartAllModule,
    RangeNavigatorAllModule,
    IgxFinancialChartModule
  ],
  exports: [],
  providers: [FinancialDataService],
  entryComponents: []
})
export class DashboardModule {}
