import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {

	suggestionCard : ITypeSuggestion;

	private route : ActivatedRoute;
	private contactService : ContactService;

	constructor(route : ActivatedRoute,  contactService : ContactService) { 
		this.route = route;
		this.contactService = contactService;
	}

	ngOnInit() {
		this.route.params.forEach(params => {
			let id = +params['id'];
			this.suggestionCard = this.contactService.getSuggestionCardById(id);
		});
  	}

	onSubmit(value : any){
		console.log(value);
	}
}
