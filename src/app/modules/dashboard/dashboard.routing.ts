import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandlestickComponent } from './page/candlestick/candlestick.component';
import { FinancialChartComponent } from './page/financial-chart/financial-chart.component';
import { InteractiveComponent } from './page/interactive/interactive.component';
import { MultipleSeriesComponent } from './page/multiple-series/multiple-series.component';
import { RangeSelectorComponent } from './page/range-selector/range-selector.component';
import { TrendlinesComponent } from './page/trendlines/trendlines.component';
import { StockEventsComponent } from './page/stock-events/stock-events.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'candlestick',
    component: CandlestickComponent,
    data: {
      key: {}
    }
  },
  {
    path: 'financial-chart',
    component: FinancialChartComponent
  },
  {
    path: 'interactive',
    component: InteractiveComponent
  },
  {
    path: 'multipleSeries',
    component: MultipleSeriesComponent
  },
  {
    path: 'RangeSelector',
    component: RangeSelectorComponent
  },
  {
    path: 'Trendlines',
    component: TrendlinesComponent
  },
  {
    path: 'StockEvents',
    component: StockEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
