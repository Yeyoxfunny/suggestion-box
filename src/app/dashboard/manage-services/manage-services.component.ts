import { Component, OnInit, EventEmitter } from '@angular/core';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';
import { SUGGESTIONS_SERVICE_CARD } from '../../common/mock-suggestion-service-card';

import { TypeSuggestionService } from '../services/type-suggestion.service';

@Component({
	selector: 'app-manage-services',
	templateUrl: './manage-services.component.html',
	styles: []
})
export class ManageServicesComponent implements OnInit {

	TypeSuggestions : ITypeSuggestion[];

	hideElement : boolean = true;

	constructor(private typeSuggestionService : TypeSuggestionService) {
	}

	ngOnInit() {
		this.typeSuggestionService
					.getAllTypeSuggestions()
					.subscribe(typeSuggestionsData => {
						console.log(typeSuggestionsData)
						this.TypeSuggestions = typeSuggestionsData});
	}

	showNewItemForm(){
		this.hideElement = false;
	}

	hideNewItemForm(){
		this.hideElement = true;
	}
}
