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
					.then((response: Response) => {
						return response.json()
					})
					.catch(this.errorHandler);
	}

	insertTypeSuggestion(typeSuggestion): Promise<ITypeSuggestion>{
		return this.http
						.post(this.TYPE_SUGGESTION_URL, typeSuggestion)
						.toPromise()
						.then((response: Response) => {
							if(response.status !== 201){
								return Promise.reject(response);
							}
							return response.json();
						})
						.catch(this.errorHandler);
	}

	updateTypeSuggestion(id: number, typeSuggestion): Promise<any>{
		const uri = this.TYPE_SUGGESTION_URL + id;
		return this.http
					.put(uri, typeSuggestion)
					.toPromise()
					.then(response => {
						if(response.status !== 200){
							Promise.reject(response);
						}
						return response.json();
					})
					.catch(this.errorHandler);
	}

	deleteTypeSuggestion(id: number): Promise<any>{
		const uri = this.TYPE_SUGGESTION_URL + id;
		return this.http.delete(uri).toPromise().catch(this.errorHandler);
	}

	errorHandler(error: Response){
		return Promise.resolve(error || "Server Error");
	}
}
