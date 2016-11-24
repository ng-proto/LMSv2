import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { NavbarComponent } from './navbar/navbar.component';
const appRoutes: Routes = [
    { 
      path: '', 
      component: DashboardComponent 
    },
    { 
      path: 'dashboard', 
      component: DashboardComponent 
    },
    { 
      path: 'detailView', 
      component: DetailViewComponent 
    }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
