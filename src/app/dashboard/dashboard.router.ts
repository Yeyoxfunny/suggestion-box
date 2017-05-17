import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TypeSuggestionsComponent } from './type-suggestions/type-suggestions.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

export const DashboardRoutes: Routes = 
[{ 
	path: 'dashboard',
	component: HomeComponent,
	children: [
			{ path: 'type-suggestions', component: TypeSuggestionsComponent },
			{ path: 'suggestions', component: SuggestionsComponent }
		]
	}
];