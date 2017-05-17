import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

/* Dashboard Components */

/* Shared Components */
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { HomeComponent } from './home/home.component';

/* TypeSuggestions Components */
import { TypeSuggestionsComponent } from './type-suggestions/type-suggestions.component';
import { ConfirmModalComponent } from './type-suggestions/confirm-modal/confirm-modal.component';
import { UpdateModalComponent } from './type-suggestions/update-modal/update-modal.component';
import { InsertModalComponent } from './type-suggestions/insert-modal/insert-modal.component';

/* Suggestions Components */
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { SuggestionComponent } from './suggestions/suggestion/suggestion.component';

const routedComponents = [ HomeComponent, SuggestionsComponent, TypeSuggestionsComponent ];

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		MaterializeModule,
		RouterModule
	],
	providers: [ ],
	declarations: [routedComponents, 
						TopBarComponent, 
						SideNavComponent,  
						ConfirmModalComponent, 
						UpdateModalComponent, 
						InsertModalComponent, 
						SuggestionComponent]
})
export class DashboardModule { }
