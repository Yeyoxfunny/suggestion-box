import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { AppComponent } from './core/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuggestionComponent } from './dashboard/suggestion/suggestion.component';

const routes : Routes = [ 
              { path : '', loadChildren: './core/core.module#CoreModule' },
              { path: 'dashboard', component: DashboardComponent}
            ];


@NgModule({
  declarations: [
    DashboardComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
