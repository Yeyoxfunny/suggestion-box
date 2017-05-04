import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';

const routes : Routes = [
							{ path: '', component: HomeComponent },
							{ path: 'manage-services', component: ManageServicesComponent},
							{ path: 'suggestions', component: SuggestionComponent}
						];

const routedComponents = [ HomeComponent, SuggestionComponent, ManageServicesComponent ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [routedComponents, TopBarComponent]
})
export class DashboardModule { }
