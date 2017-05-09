import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suggestion-service',
  template: `
				<div class="card-content suggestion-service-card-content">
					<div class="card-icon">
						<a href=""><img src="assets/images/home/icons/{{imageUri}}"></a>
					</div>
					<div class="card-content-info">
						<a routerLink="contact/{{id}}"><h3>{{ title }}</h3></a>
						<p>{{ caption }}</p>
					</div>
				</div>
  			`
})

export class SuggestionServiceComponent{

	@Input()
	id : number;

	@Input()
	title : string;

	@Input()
	caption : string;

	@Input()
	imageUri : string;
}
