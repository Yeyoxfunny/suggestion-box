import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const LandingRoutes: Routes = [
									{ path: '', component: HomeComponent},
									{ path: 'contact', pathMatch: 'full', redirectTo: 'contact/1'},
									{ path: 'contact/:id', component: ContactComponent}
								];