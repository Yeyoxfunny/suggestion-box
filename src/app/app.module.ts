import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { SuggestionServiceComponent } from './home/suggestion-service/suggestion-service.component';
import { routes, routedComponents } from './app.router';
import { SuggestionComponent } from './dashboard/suggestion/suggestion.component';


@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    SuggestionServiceComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
