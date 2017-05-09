import { Injectable } from '@angular/core';
import { SUGGESTIONS_SERVICE_CARD } from '../common/mock-suggestion-service-card';
import { ITypeSuggestion } from '../models/ITypeSuggestion';

@Injectable()
export class ContactService {

  constructor() { }


  getAllSuggestionsCards() : ITypeSuggestion[] {
  	return SUGGESTIONS_SERVICE_CARD;
  }

  getSuggestionCardById(idService : number) : ITypeSuggestion {
  	let sugggestionCard = SUGGESTIONS_SERVICE_CARD.find(suggestion => suggestion.id == idService);
  	return sugggestionCard;
  }

}
