import { Component, OnInit } from '@angular/core';

import { SUGGESTIONS_SERVICE_CARD } from '../../common/mock-suggestion-service-card';
import { ISuggestionServiceCard } from '../../models/ISuggestionServiceCard';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [ ContactService ]
})

export class HomeComponent implements OnInit{
	suggestionsCard : ISuggestionServiceCard[];

	constructor(private contactService : ContactService){
	}

	ngOnInit(){
		this.suggestionsCard = this.contactService.getAllSuggestionsCards();
	}
}
