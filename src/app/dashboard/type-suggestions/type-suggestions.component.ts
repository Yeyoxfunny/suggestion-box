import { Component, ViewChild, OnInit, EventEmitter } from '@angular/core';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';
import { TypeSuggestionService } from '../services/type-suggestion.service';
import { FileUploadService } from '../../services/file-upload.service';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { InsertModalComponent } from './insert-modal/insert-modal.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';

@Component({
	selector: 'app-manage-services',
	templateUrl: './type-suggestions.component.html',
	providers: [ FileUploadService ]
})
export class TypeSuggestionsComponent implements OnInit {

	TypeSuggestions : ITypeSuggestion[];
	
	@ViewChild(ConfirmModalComponent) confirmModal : ConfirmModalComponent;
	@ViewChild(InsertModalComponent) insertModal: InsertModalComponent;
	@ViewChild(UpdateModalComponent) updateModal: UpdateModalComponent;

	constructor(private typeSuggestionService : TypeSuggestionService) {
	}

	ngOnInit() {
		this.typeSuggestionService
					.getAllTypeSuggestions()
					.then(typeSuggestionsData => this.TypeSuggestions = typeSuggestionsData)
					.catch(console.error);
					
	}

	openInsertModal(){
		this.insertModal.openModal();
	}

	openUpdateModal(typeSuggestion){
		this.updateModal.openModal(typeSuggestion);
	}

	openConfirmModal(id: number){
		this.confirmModal.openModal(id);
	}

	handleDeleted(idTypeSuggestion){
		this.TypeSuggestions = this.TypeSuggestions.filter(x => x.id !== idTypeSuggestion);
	}

	handleInserted($event){
		const newTypeSuggestion: ITypeSuggestion = {
			id: $event.id,
			title: $event.title,
			caption: $event.caption,
			imageUri: $event.imageUri
		};
		this.TypeSuggestions.push(newTypeSuggestion);
	}

	handleUpdated($event){
		this.TypeSuggestions.forEach(x => {
			if(x.id == $event.id){
				x.title = $event.title;
				x.caption = $event.caption;
				x.imageUri = $event.imageUri;
			}
		});
	}
}

