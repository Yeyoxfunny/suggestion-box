import { Component, EventEmitter } from '@angular/core';

import { ITypeSuggestion } from '../../../models/ITypeSuggestion';
import { TypeSuggestionService } from '../../services/type-suggestion.service';
import { FileUploadService } from '../../../services/file-upload.service';

import { MaterializeAction } from 'angular2-materialize';

@Component({
	selector: 'app-type-suggestion-modal',
	templateUrl: './type-suggestion-modal.component.html',
	styleUrls: ['./type-suggestions-modal.component.css']
})
export class TypeSuggestionModalComponent {

	modalActions = new EventEmitter<string | MaterializeAction>();

	private title : string;
	private caption : string;
	private imageUri : string;

	private isCreate : boolean;
	private changeImage: boolean = false;

	private fileToUpload : File;
	private acceptFileTypes = /^image\/(gif|jpe?g|png)$/i;
	private isValidFile: boolean = true;

	constructor(private fileUploadService : FileUploadService,
				private typeSuggestionService: TypeSuggestionService) {
	}

	saveTypeSuggestion(values){
		console.log(values);
		let url = 'http://localhost:60024/api/TypeSuggestions/thumbnail';
		this.fileUploadService
					.makeFileRequest([this.fileToUpload], url)
					.then((thumbnail) => {
						let imageLocation = thumbnail.imageUri;
						let typeSuggestion = {
							title: values.title,
							caption: values.caption,
							imageUri: imageLocation
						};
						return this.typeSuggestionService.insertTypeSuggestion(typeSuggestion);
					})
					.then(response => console.log(response))
					.catch(console.error);
	}

	updateTypeSuggestion(values){
		console.log(values);
	}

	fileChangeEvent(fileInput: any){
		let tempFile = fileInput.target.files[0];
		this.isValidFile = this.acceptFileTypes.test(tempFile.type);

		if(this.isValidFile){
			this.fileToUpload = tempFile;
			this.renderImageFromFile(this.fileToUpload);
		}
	}

	renderImageFromFile(file : File){
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => this.imageUri = reader.result;
		reader.onerror = console.error;
	}

	onChangeImage(){
		this.changeImage = true;
	}

	openModal(typeSuggestion){
		this.title = typeSuggestion? typeSuggestion.title : '';
		this.caption = typeSuggestion? typeSuggestion.caption : '';
		this.imageUri = typeSuggestion? typeSuggestion.imageUri : '';

		this.changeImage = typeSuggestion? false: true;
		this.isCreate = typeSuggestion? false : true;

		this.modalActions.emit({ action: "modal", params: ['open'] });
	}
	
	close(formModel){
		formModel.reset();
		this.closeModal();
	}

	closeModal(){
		this.changeImage = false;
		this.isValidFile = true;
		this.fileToUpload = undefined;
		
		this.modalActions.emit({ action: "modal", params: ['close'] });
	}
}
