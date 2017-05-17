import { Component, Output , EventEmitter, OnInit } from '@angular/core';

import { TypeSuggestionService } from '../../../services/type-suggestion.service';
import { FileUploadService } from '../../../services/file-upload.service';

import { MaterializeAction } from 'angular2-materialize';

/* 
	Materialize is a global object that exists in Materialize Front-end Framework,
	This variable allows access to the global Materialize object
 */
declare var Materialize: any;

@Component({
  selector: 'app-insert-modal',
  templateUrl: './insert-modal.component.html',
  styleUrls: ['../validation-form.css']
})
export class InsertModalComponent implements OnInit {

	modalActions = new EventEmitter<string | MaterializeAction>();
	@Output('inserted') insertedItem = new EventEmitter();

	fileToUpload: File;
	isValidFile: boolean = true;
	acceptFileTypes = /^image\/(gif|jpe?g|png)$/i;

	title: string;
	caption: string;
	imageUri: string;
	
	constructor(private fileUploadService : FileUploadService,
				private typeSuggestionService: TypeSuggestionService) { }

	ngOnInit() {
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
		this.closeModal();
		this.uploadFileAndGetUri()
		.then((thumbnail) => thumbnail.imageUri)
		.then(this.saveTypeSuggestion)
		.then(response => {
			Materialize.toast('¡El elemento fue insertado satisfactoriamente!', 4000);
			this.insertedItem.emit(response);
		})
		.catch(error => {
			console.error(error);
			Materialize.toast('¡Ocurrio un error, no se pudo insertar el elemento!', 4000);
		});
	}

	uploadFileAndGetUri(): Promise<any>{
		const url = 'http://localhost:60024/api/TypeSuggestions/thumbnail';
		return this.fileUploadService.makeFileRequest([this.fileToUpload], url);
	}

	saveTypeSuggestion = (imageUri: string): Promise<any> =>{
		const typeSuggestion = {
			title: this.title,
			caption: this.caption,
			imageUri: imageUri
		}
		return this.typeSuggestionService.insertTypeSuggestion(typeSuggestion);
	}

	openModal(){
		this.modalActions.emit({ action: "modal", params: ['open'] });
	}

	closeAndReset(formModel){
		formModel.reset();
		this.closeModal();
	}

	closeModal(){
		this.modalActions.emit({ action: "modal", params: ['close'] });
	}
}
