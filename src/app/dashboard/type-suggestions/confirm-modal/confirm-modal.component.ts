import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize'

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
						<a class="modal-action modal-close waves-effect waves-green btn-flat">Aceptar</a>
						<a class="modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
					</div>
				</div>
  			`,
  styles: [`.fix-icon{ position: relative; top: 6px;}`]
})
export class ConfirmModalComponent implements OnInit {

	modalActions = new EventEmitter<string | MaterializeAction>();
	
	constructor() { }

	ngOnInit() {
	}

	openModal(){
		this.modalActions.emit({ action: "modal", params: ['open'] });
	}

	closeModal(){
		this.modalActions.emit({ action: "modal", params: ['close'] });
	}

}
