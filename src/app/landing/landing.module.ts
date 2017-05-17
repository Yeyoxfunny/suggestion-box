import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { SuggestionServiceComponent } from './home/suggestion-service/suggestion-service.component';
import { ContactComponent } from './contact/contact.component';

const routedComponents = [ HomeComponent, ContactComponent ];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule
	],
	declarations: [ routedComponents, TopBarComponent, SuggestionServiceComponent ],
	exports: [  ]
})
export class LandingModule { }
