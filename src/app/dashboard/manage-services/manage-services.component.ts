import { Component, OnInit, EventEmitter } from '@angular/core';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';
import { SUGGESTIONS_SERVICE_CARD } from '../../common/mock-suggestion-service-card';

import { TypeSuggestionService } from '../services/type-suggestion.service';

@Component({
	selector: 'app-manage-services',
	templateUrl: './manage-services.component.html',
	styleUrls: ['./manage-services.component.css'],
})
export class ManageServicesComponent implements OnInit {

	TypeSuggestions : ITypeSuggestion[];
	fileToUpload : File;

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

	onSubmit(values: any){
		console.log(values);
	}

	fileChangeEvent(fileInput : any){
		this.fileToUpload = fileInput.target.files[0];

		this.typeSuggestionService
					.uploadFileAndGetLocation(this.fileToUpload)
					.then(console.log)
					.catch(console.error);
	}

	showNewItemForm(){
		this.hideElement = false;
	}

	hideNewItemForm(){
		this.hideElement = true;
	}
}
