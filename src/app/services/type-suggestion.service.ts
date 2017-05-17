import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ITypeSuggestion } from '../models/ITypeSuggestion';

@Injectable()
export class TypeSuggestionService {

	private typeSuggestionUrl: string = "http://localhost:60024/api/TypeSuggestions/";
	//private typeSuggestionUrl : string = "http://localhost:4200/assets/typesuggestions.json";
	private imageTypeSuggestionUrl: string = this.typeSuggestionUrl + "thumbnail";
	
	constructor(private http : Http) {
	}

	getAllTypeSuggestions(): Promise<ITypeSuggestion[]>{
		return this.http
					.get(this.typeSuggestionUrl)
					.toPromise()
					.then((response: Response) => {
						return response.json()
					})
					.catch(this.errorHandler);
	}

	getTypeSuggestion(id: number){
		const url = this.typeSuggestionUrl + id;
		return this.http
							.get(url)
							.toPromise()
							.then(response => {
								if(response.status !== 200){
									return this.errorHandler(response);
								}
								return response.json();
							});
	}

	insertTypeSuggestion(typeSuggestion): Promise<ITypeSuggestion>{
		return this.http
						.post(this.typeSuggestionUrl, typeSuggestion)
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
		const uri = this.typeSuggestionUrl + id;
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
		const uri = this.typeSuggestionUrl + id;
		return this.http.delete(uri).toPromise().catch(this.errorHandler);
	}

	errorHandler(error){
		return Promise.resolve(error || "Server Error");
	}
}
