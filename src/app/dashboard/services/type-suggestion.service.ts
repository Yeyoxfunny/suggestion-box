import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';

@Injectable()
export class TypeSuggestionService {

	private static TYPE_SUGGESTION_URL = "localhost:60024/api/TypeSuggestions";

	constructor(private http : Http) { 
		console.log('Hello world')
	}

	getAllTypeSuggestions() : Observable<ITypeSuggestion[]>{
		return this.http
				.get(TypeSuggestionService.TYPE_SUGGESTION_URL)	
				.map((response) => response.json())
					
	}
}
