import { Component, OnInit, EventEmitter} from '@angular/core';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';
import { TypeSuggestionService } from '../services/type-suggestion.service';
import { FileUploadService } from '../../services/file-upload.service';

import { MaterializeAction } from 'angular2-materialize';

@Component({
	selector: 'app-manage-services',
	templateUrl: './type-suggestions.component.html',
	styleUrls: ['./type-suggestions.component.css'],
	providers: [ FileUploadService ]
})
export class TypeSuggestionsComponent implements OnInit {

	TypeSuggestions : ITypeSuggestion[];
	fileToUpload : File;

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

	openModal(typeSuggestion){
		console.log(typeSuggestion);
		this.modalActions.emit({ action: "modal", params: ['open'] });
	}
	
	closeModal(){
		this.modalActions.emit({ action: "modal", params: ['close'] });
	}
}

