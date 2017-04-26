import { Injectable } from '@angular/core';
import { SUGGESTIONS_SERVICE_CARD } from '../common/mock-suggestion-service-card';
import { ISuggestionServiceCard } from '../models/ISuggestionServiceCard';

@Injectable()
export class ContactService {

  constructor() { }


  getAllSuggestionsCards() : ISuggestionServiceCard[] {
  	return SUGGESTIONS_SERVICE_CARD;
  }

  getSuggestionCardById(idService : number) : ISuggestionServiceCard {
  	let sugggestionCard = SUGGESTIONS_SERVICE_CARD.find(suggestion => suggestion.id == idService);
  	return sugggestionCard;
  }

}
