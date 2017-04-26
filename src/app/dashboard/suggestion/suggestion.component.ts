import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html'
})
export class SuggestionComponent implements OnInit {
  date : Date;
  constructor() {
    this.date = new Date();
   }

  ngOnInit() {
  }

}
