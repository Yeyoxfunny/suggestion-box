import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

const routes : Routes = [
							{ path: '', component: HomeComponent }
						];

const routedComponents = [ HomeComponent ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [routedComponents, SuggestionComponent]
})
export class DashboardModule { }
