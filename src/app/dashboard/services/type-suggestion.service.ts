import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';

@Injectable()
export class TypeSuggestionService {

	private TYPE_SUGGESTION_URL : string = "http://localhost:60024/api/TypeSuggestions/";
	//private TYPE_SUGGESTION_URL : string = "http://localhost:4200/assets/typesuggestions.json";
	private IMAGE_TYPE_SUGGESTION_URL : string = this.TYPE_SUGGESTION_URL + "thumbnail";
	
	constructor(private http : Http) {
	}

	getAllTypeSuggestions(): Promise<ITypeSuggestion[]>{
		return this.http
					.get(this.TYPE_SUGGESTION_URL)
					.toPromise()
					.then((response: Response) => response.json())
					.catch(this.errorHandler);
	}

	insertTypeSuggestion(typeSuggestion): Promise<ITypeSuggestion>{
		return this.http
						.post(this.TYPE_SUGGESTION_URL, typeSuggestion)
						.toPromise()
						.then(response => response.json())
						.catch(this.errorHandler);
	}

	deleteTypeSuggestion(id: number): Promise<any>{
		let uri = this.TYPE_SUGGESTION_URL + id;
		return this.http.delete(uri).toPromise().catch(this.errorHandler);
	}

	errorHandler(error: Response){
		return Promise.resolve(error || "Server Error");
	}
}
