import { Component, OnInit, EventEmitter } from '@angular/core';

import { ISuggestionServiceCard } from '../../models/ISuggestionServiceCard';
import { SUGGESTIONS_SERVICE_CARD } from '../../common/mock-suggestion-service-card';

@Component({
	selector: 'app-manage-services',
	templateUrl: './manage-services.component.html',
	styles: []
})
export class ManageServicesComponent implements OnInit {

	TypeSuggestions : ISuggestionServiceCard[];

	hideElement : boolean = true;

	constructor() {
	}

	ngOnInit() {
		this.TypeSuggestions = SUGGESTIONS_SERVICE_CARD;
	}

	showNewItemForm(){
		this.hideElement = false;
	}

	hideNewItemForm(){
		this.hideElement = true;
	}
}
