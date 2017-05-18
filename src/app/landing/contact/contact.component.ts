import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';
import { SuggestionStatus } from '../../models/SuggestionStatus';

import { TypeSuggestionService } from '../../services/type-suggestion.service';
import { ContactService } from '../../services/contact.service';
import { SuggestionsService } from '../../services/suggestions.service';

/* 
	Materialize is a global object that exists in Materialize Front-end Framework,
	This variable allows access to the global Materialize object
 */
declare var Materialize: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ SuggestionsService, ContactService ]
})
export class ContactComponent implements OnInit {

	typeSuggestion : ITypeSuggestion;
	typeSuggestionId: number;

	constructor(private route : ActivatedRoute,
					private typeSuggestionService: TypeSuggestionService,
					private suggestionService: SuggestionsService,
					private contactService: ContactService) { 
	}

	ngOnInit() {
		this.route.params.forEach(params => {
			this.typeSuggestionId = +params['id'];
			/*this.typeSuggestionService
					.getTypeSuggestion(id)
					.then(typeSuggestion => this.typeOfSuggestion = typeSuggestion);
			*/
			this.typeSuggestion = this.contactService.getSuggestionCardById(this.typeSuggestionId);
		});
  	}

	onSubmit(value : any){
		const newSuggestion = {
			title: value.title,
			userName: `${value.name} ${value.surname}`,
			email: value.email,
			description: value.description,
			creationDate: new Date().toString(),
			typeSuggestionId: this.typeSuggestionId,
			stateId: SuggestionStatus.Pendiente
		};
		
		this.suggestionService
			.insertSuggestion(newSuggestion)
			.then(response => {
				console.log(response);
				Materialize.toast('¡La sugerencia se ha enviado satisfactoriamente!', 4000);
			})
			.catch(error => {
				Materialize.toast('¡Ocurrio un error, no se envio la sugerencia!', 4000);
			})
	}
}
