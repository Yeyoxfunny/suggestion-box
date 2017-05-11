import { Component, OnInit, EventEmitter } from '@angular/core';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';
import { SUGGESTIONS_SERVICE_CARD } from '../../common/mock-suggestion-service-card';

import { TypeSuggestionService } from '../services/type-suggestion.service';
import { FileUploadService } from '../../services/file-upload.service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
	selector: 'app-manage-services',
	templateUrl: './manage-services.component.html',
	styleUrls: ['./manage-services.component.css'],
	providers: [ FileUploadService ]
})
export class ManageServicesComponent implements OnInit {

	TypeSuggestions : ITypeSuggestion[];
	fileToUpload : File;

	hideElement : boolean = true;

	modalActions = new EventEmitter<string | MaterializeAction>();

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

	onSubmit(values: any){
		let url = 'http://localhost:60024/api/TypeSuggestions/thumbnail';
		this.fileUploadService
					.makeFileRequest([this.fileToUpload], url)
					.then((thumbnail) => {
						let imageLocation = thumbnail.imageUri;
						console.log(imageLocation);
					})
					.catch(console.error);
	}

	fileChangeEvent(fileInput : any){
		this.fileToUpload = fileInput.target.files[0];
	}

	showNewItemForm(){
		this.hideElement = false;
	}

	hideNewItemForm(){
		this.hideElement = true;
	}

	openModal(){
		this.modalActions.emit({ action: "modal", params: ['open'] });
	}
	closeModal(){
		this.modalActions.emit({ action: "modal", params: ['close'] });
	}
}
