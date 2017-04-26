import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suggestion-service',
  template: `
				<div class="card-content suggestion-service-card-content">
					<div class="card-icon">
						<a href=""><img src="assets/images/home/icons/{{image}}"></a>
					</div>
					<div class="card-content-info">
						<a routerLink="contact/{{id}}"><h3>{{ title }}</h3></a>
						<p>{{ description }}</p>
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
	description : string;

	@Input()
	image : string;
}
