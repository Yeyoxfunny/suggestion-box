import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { MaterializeModule } from 'angular2-materialize';

/* Dashboard Components */
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { HomeComponent } from './home/home.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

import { TypeSuggestionsComponent } from './type-suggestions/type-suggestions.component';
import { ConfirmModalComponent } from './type-suggestions/confirm-modal/confirm-modal.component';
import { UpdateModalComponent } from './type-suggestions/update-modal/update-modal.component';
import { InsertModalComponent } from './type-suggestions/insert-modal/insert-modal.component';

/* Services */
import { TypeSuggestionService } from './services/type-suggestion.service';


const routes : Routes = [
							{ path: '', children : 
								[
									{ path: '', component: HomeComponent },
									{ path: 'type-suggestions', component: TypeSuggestionsComponent },
									{ path: 'suggestions', component: SuggestionsComponent }
								]
							}
						];

const routedComponents = [ HomeComponent, SuggestionsComponent, TypeSuggestionsComponent ];

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		MaterializeModule,
		RouterModule.forChild(routes)
	],
	providers: [ TypeSuggestionService ],
	declarations: [routedComponents, 
						TopBarComponent, 
						SideNavComponent,  
						ConfirmModalComponent, UpdateModalComponent, InsertModalComponent]
})
export class DashboardModule { }
