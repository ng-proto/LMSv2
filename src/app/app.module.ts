import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LeaveFromComponent } from './leave-from/leave-from.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashBoardComponent,
    LeaveFromComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashBoardComponent
      },
      {
        path: 'dashboard',
        component: DashBoardComponent
      },
      {
        path: 'myLeave',
        component: LeaveFromComponent
      },
      {
        path: 'barChart',
        component: BarChartComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
