import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISuggestionServiceCard } from '../models/ISuggestionServiceCard';

import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {

	suggestionCard : ISuggestionServiceCard;

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
}
