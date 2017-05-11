import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';

@Injectable()
export class TypeSuggestionService {

	//private TYPE_SUGGESTION_URL : string = "http://localhost:60024/api/TypeSuggestions/";
	private TYPE_SUGGESTION_URL : string = "http://localhost:4200/assets/typesuggestions.json";
	private IMAGE_TYPE_SUGGESTION_URL : string = this.TYPE_SUGGESTION_URL + "thumbnail";
	constructor(private http : Http) {
	}

	getAllTypeSuggestions() : Observable<ITypeSuggestion[]>{
		return this.http
				.get(this.TYPE_SUGGESTION_URL)	
				.map((response) => response.json())				
	}
}
