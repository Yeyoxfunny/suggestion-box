import { Component, EventEmitter, Output ,OnInit } from '@angular/core';

import { TypeSuggestionService } from '../../../services/type-suggestion.service';
import { FileUploadService } from '../../../services/file-upload.service';

import { MaterializeAction } from 'angular2-materialize';

/* 
	Materialize is a global object that exists in Materialize Front-end Framework,
	This variable allows access to the global Materialize object
 */
declare var Materialize: any;

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styles: []
})
export class UpdateModalComponent implements OnInit {

	modalActions = new EventEmitter<string | MaterializeAction>();
	@Output('updated') updatedItem = new EventEmitter();

	fileToUpload: File;
	isValidFile: boolean = true;
	changeImage: boolean = false;
	acceptFileTypes = /^image\/(gif|jpe?g|png)$/i;
	
	typeSuggestionId: number;
	title: string;
	caption: string;
	imageUri: string;
	
	constructor(private fileUploadService : FileUploadService,
				private typeSuggestionService: TypeSuggestionService) { }

	ngOnInit() {
	}

	onChangeImage(){
		this.changeImage = true;
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

	onSubmit(){
		this
			.uploadFileAndGetUri()
			.then(this.updateTypeSuggestion)
			.then(response => {
				this.updatedItem.emit(response);
				Materialize.toast('¡El item fue actualizado satisfactoriamente!', 4000);
			})
			.catch(error => {
				console.error(error);
				Materialize.toast('¡Ocurrio un error, no se pudo insertar el elemento!', 4000);
			})
	}

	uploadFileAndGetUri(): Promise<any>{
		const url = 'http://localhost:60024/api/TypeSuggestions/thumbnail';
		if(this.fileToUpload){
			return this.fileUploadService
							.makeFileRequest([this.fileToUpload], url)
							.then(thumbnail => thumbnail.imageUri);
		}
		return Promise.resolve(this.imageUri);
	}

	updateTypeSuggestion = (imageUri: string): Promise<any> => {
		const updatedTypeSuggestion = {
			title: this.title,
			caption: this.caption,
			imageUri: imageUri
		};

		return this.typeSuggestionService
				.updateTypeSuggestion(this.typeSuggestionId, updatedTypeSuggestion);
	}

	openModal(typeSuggestion){
		if(typeSuggestion){
			this.typeSuggestionId = typeSuggestion.id;
			this.title = typeSuggestion.title;
			this.caption = typeSuggestion.caption;
			this.imageUri = typeSuggestion.imageUri;
		}

		this.modalActions.emit({ action: "modal", params: ['open'] });
	}

	closeAndReset(formModel){
		formModel.reset();
		this.fileToUpload = undefined;

		this.closeModal();
	}

	closeModal(){
		this.modalActions.emit({ action: "modal", params: ['close'] });
	}
}
