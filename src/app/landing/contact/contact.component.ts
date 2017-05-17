import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';
import { TypeSuggestionService } from '../../services/type-suggestion.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {

	typeSuggestion : ITypeSuggestion;

	constructor(private route : ActivatedRoute,
					private typeSuggestionService: TypeSuggestionService,
					private contactService: ContactService) { 
	}

	ngOnInit() {
		this.route.params.forEach(params => {
			let id = +params['id'];
			/*this.typeSuggestionService
					.getTypeSuggestion(id)
					.then(typeSuggestion => this.typeOfSuggestion = typeSuggestion);
			*/
			this.typeSuggestion = this.contactService.getSuggestionCardById(id);
		});
  	}

	onSubmit(value : any){
		console.log(value);
	}
}
