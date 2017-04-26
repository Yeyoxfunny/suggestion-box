import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes : Routes = [
								{ path : '', component: HomeComponent },
								{ path : 'contact/:id', component : ContactComponent},
								{ path : 'dashboard', component : DashboardComponent }
							];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRoutes);

export const routedComponents = [ HomeComponent, ContactComponent, DashboardComponent ];