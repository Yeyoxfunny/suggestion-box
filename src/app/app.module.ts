import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { Routes, RouterModule } from '@angular/router';

import { LandingModule } from './landing/landing.module';
import { AppComponent } from './landing/app.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes : Routes = [ 
              { path : '', loadChildren: './landing/landing.module#LandingModule' },
              { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
            ];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    LandingModule,
    DashboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
