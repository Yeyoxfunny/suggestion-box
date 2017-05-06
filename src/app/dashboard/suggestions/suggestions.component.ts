import { SUGGESTIONS } from '../../common/mock-suggestions';
import { ISuggestion } from '../../models/ISuggestion';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
	selector: 'app-manage-suggestions',
	templateUrl: './suggestions.component.html',
	styles: []
})
export class SuggestionsComponent implements OnInit {

	suggestions : ISuggestion[];
	currentSuggestion : ISuggestion;

	modalActions = new EventEmitter<string | MaterializeAction>();

	constructor() { }

	ngOnInit() {
		this.suggestions = SUGGESTIONS;
		this.currentSuggestion = SUGGESTIONS[0];
	}

	openModal(idSuggestion : number) {
		console.log(idSuggestion);
		this.modalActions.emit({ action: "modal", params: ['open'] });
		this.currentSuggestion = this.suggestions.find(x => x.id == idSuggestion);
	}
	closeModal() {
		this.modalActions.emit({ action: "modal", params: ['close'] });
	}
}
