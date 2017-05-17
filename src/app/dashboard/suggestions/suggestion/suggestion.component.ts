import { Component, OnInit, Input } from '@angular/core';

import { ISuggestion } from '../../../models/ISuggestion';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styles: []
})
export class SuggestionComponent implements OnInit {

	@Input()suggestion: ISuggestion;

	constructor() { }

	ngOnInit() {
	}

}
