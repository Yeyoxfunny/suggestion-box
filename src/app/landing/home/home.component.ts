import { Component, OnInit } from '@angular/core';

import { SUGGESTIONS_SERVICE_CARD } from '../../common/mock-suggestion-service-card';
import { ITypeSuggestion } from '../../models/ITypeSuggestion';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [ ContactService ]
})

export class HomeComponent implements OnInit{
	typeSuggestions : ITypeSuggestion[];

	constructor(private contactService : ContactService){
	}

	ngOnInit(){
		this.typeSuggestions = this.contactService.getAllSuggestionsCards();
	}
}
