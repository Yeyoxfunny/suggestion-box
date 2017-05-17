import { ISuggestion } from '../../models/ISuggestion';
import { Component, OnInit, EventEmitter } from '@angular/core';

import { SuggestionsService } from '../../services/suggestions.service';

@Component({
	selector: 'app-manage-suggestions',
	templateUrl: './suggestions.component.html',
	styles: []
})
export class SuggestionsComponent implements OnInit {

	suggestions : ISuggestion[];

	constructor(private suggestionsService: SuggestionsService) { }

	ngOnInit() {
		this.suggestionsService
				.getAllSuggestions()
				.then(suggestionsData => this.suggestions = suggestionsData);
	}
}
