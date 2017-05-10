import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ITypeSuggestion } from '../../models/ITypeSuggestion';

@Injectable()
export class TypeSuggestionService {

	private TYPE_SUGGESTION_URL : string = "http://localhost:60024/api/TypeSuggestions";
	private IMAGE_TYPE_SUGGESTION_URL : string = "http://localhost:60024/api/Files";
	constructor(private http : Http) {
	}

	getAllTypeSuggestions() : Observable<ITypeSuggestion[]>{
		return this.http
				.get(this.TYPE_SUGGESTION_URL)	
				.map((response) => response.json())
					
	}

	uploadFileAndGetLocation(file : File) : Promise<any>{
		
		return new Promise((resolve, reject) => {
			let formData : FormData = new FormData();
			let xhr: XMLHttpRequest = new XMLHttpRequest();

			formData.append("image", file, file.name);

			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4){
					if(xhr.status === 201){
						return resolve(xhr.response);
					}

					reject(JSON.parse(xhr.response));
				}
			}

			xhr.open("POST", this.IMAGE_TYPE_SUGGESTION_URL, true);
			xhr.send(formData);
		});
	}


}
