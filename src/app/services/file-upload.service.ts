import { Injectable } from '@angular/core';

@Injectable()
export class FileUploadService {

	constructor() { }

	makeFileRequest(files: File[], url: string) : Promise<any>{
		return new Promise((resolve, reject) => {

			let formData : FormData = new FormData();
			let xhr: XMLHttpRequest = new XMLHttpRequest();

			for(let i = 0; i < files.length; i++){
				formData.append("uploads[]", files[i], files[i].name);	
			}

			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4){
					if(xhr.status !== 201){
						return reject(xhr.response);
					}

					resolve(JSON.parse(xhr.response));
				}
			}

			xhr.open("POST", url, true);
			xhr.send(formData);
		});
	}
}
