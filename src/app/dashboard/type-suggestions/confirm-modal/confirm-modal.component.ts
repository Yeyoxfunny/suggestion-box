import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize'

import { TypeSuggestionService } from '../../services/type-suggestion.service';

@Component({
  selector: 'app-confirm-modal',
  template: `
				<div id="modal2" class="modal"  materialize="modal" [materializeParams]="[{dismissible: false}]" [materializeActions]="modalActions">
					<div class="modal-content">
						<h4>
							<i class="material-icons f-size-medium fix-icon">warning</i>
							Confirmar Eliminación
						</h4>
						<p>¿Estas seguro de que quieres eliminar este item?</p>
					</div>
					<div class="modal-footer">
						<a class="modal-action modal-close waves-effect waves-green btn-flat"
							(click)="deleteTypeSuggestion()">Aceptar</a>
						<a class="modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
					</div>
				</div>
  			`,
  styles: [`.fix-icon{ position: relative; top: 6px;}`]
})
export class ConfirmModalComponent implements OnInit {

	modalActions = new EventEmitter<string | MaterializeAction>();
	
	idTypeSuggestion: number;
	@Output('deleted') typeSuggestionDeleted = new EventEmitter();

	constructor(private typeSuggestionService: TypeSuggestionService) { }

	ngOnInit() {
	}

	deleteTypeSuggestion(){
		this.typeSuggestionService
				.deleteTypeSuggestion(this.idTypeSuggestion)
				.then(response =>{
					this.typeSuggestionDeleted.emit(this.idTypeSuggestion);
				})
				.catch(console.error);
	}

	openModal(id: number){
		this.idTypeSuggestion = id;

		this.modalActions.emit({ action: "modal", params: ['open'] });
	}

	closeModal(){
		console.log(this.idTypeSuggestion);
		this.modalActions.emit({ action: "modal", params: ['close'] });
	}

}
