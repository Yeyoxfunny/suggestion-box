import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { Routes, RouterModule } from '@angular/router';

import { LandingModule } from './landing/landing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';

const routes : Routes = [ 
              { path : '', loadChildren: './landing/landing.module#LandingModule'},
              { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
            ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LandingModule,
    DashboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
