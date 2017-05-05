import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes : Routes = [
							{ path: '', 
								component: HomeComponent,
								children: [
									{ path: '', component: ManageServicesComponent, outlet: 'auxoutlet'},
									{ path: 'manage-services', component: ManageServicesComponent, outlet: 'auxoutlet'},
									{ path: 'suggestions', component: SuggestionComponent, outlet: 'auxoutlet'},
								]
							},
						];

const routedComponents = [ HomeComponent, SuggestionComponent, ManageServicesComponent ];

@NgModule({
	imports: [
		CommonModule,
		MaterializeModule,
		RouterModule.forChild(routes)
	],
	declarations: [routedComponents, TopBarComponent, SideNavComponent]
})
export class DashboardModule { }
