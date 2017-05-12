import { Component, ViewChild, OnInit } from '@angular/core';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';
import { TypeSuggestionService } from '../services/type-suggestion.service';
import { FileUploadService } from '../../services/file-upload.service';

import { TypeSuggestionModalComponent } from './type-suggestion-modal/type-suggestion-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

import { MaterializeAction } from 'angular2-materialize'

@Component({
	selector: 'app-manage-services',
	templateUrl: './type-suggestions.component.html',
	providers: [ FileUploadService ]
})
export class TypeSuggestionsComponent implements OnInit {

	TypeSuggestions : ITypeSuggestion[];

	@ViewChild(TypeSuggestionModalComponent) typeSuggestionModal : TypeSuggestionModalComponent;
	@ViewChild(ConfirmModalComponent) confirmModal : ConfirmModalComponent;

	constructor(
		private typeSuggestionService : TypeSuggestionService,
		private fileUploadService : FileUploadService) {
	}

	ngOnInit() {
		this.typeSuggestionService
					.getAllTypeSuggestions()
					.subscribe(typeSuggestionsData => {
						this.TypeSuggestions = typeSuggestionsData});
	}

	openNewItemModal(typeSuggestion){
		this.typeSuggestionModal.openModal(typeSuggestion);
	}

	openConfirmModal(){
		this.confirmModal.openModal();
	}
}

