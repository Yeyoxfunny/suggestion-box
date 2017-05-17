import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SuggestionsService {

	private baseUrl: string = "http://localhost:60024/api/Suggestions/";
	//private baseUrl: string = "http://localhost:4200/assets/suggestions.json";

	constructor(private http: Http) { }

	getAllSuggestions(): Promise<any>{
		return this.http
						.get(this.baseUrl)
						.toPromise()
						.then(response => {
							if(response.status !== 200){
								this.errorHandler(response);
							}
							return response.json();
						})
						.catch(this.errorHandler);
	}

	getSuggestion(id: number){
		const url = this.baseUrl + id;
		return this.http
						.get(url)
						.toPromise()
						.then(response => {
							if(response.status !== 200){
								return this.errorHandler(response);
							}
							return response.json();
						}).catch(this.errorHandler);
	}

	insertSuggestion(suggestion): Promise<any>{
		return this.http
						.post(this.baseUrl, suggestion)
						.toPromise()
						.then(console.log)
						.catch(this.errorHandler);
	}

	updateSuggestion(id: number, suggestion){
		const url = this.baseUrl + id;
		this.http
					.put(url, suggestion)
					.toPromise()
					.then(console.log)
					.catch(this.errorHandler);
	}

	errorHandler(error){
		return Promise.reject(error || "Server error");
	}
}
