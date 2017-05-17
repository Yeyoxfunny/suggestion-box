import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { Routes, RouterModule } from '@angular/router';

/* App Modules */
import { LandingModule } from './landing/landing.module';
import { DashboardModule } from './dashboard/dashboard.module';

/* Components */
import { AppComponent } from './app.component';

/* Suggestion Service */
import { TypeSuggestionService } from './services/type-suggestion.service';
import { SuggestionsService } from './services/suggestions.service';

/* App Routes */
import { DashboardRoutes } from './dashboard/dashboard.router';
import { LandingRoutes } from './landing/landing.router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [ 
                  ...LandingRoutes,
                  ...DashboardRoutes,
                  {
                    path: '**',
                    component: NotFoundComponent
                  } 
                ];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LandingModule,
    DashboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ TypeSuggestionService, SuggestionsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
