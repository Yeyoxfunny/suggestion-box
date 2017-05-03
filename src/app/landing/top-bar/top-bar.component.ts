import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `<div class="navbar-fixed">
				<nav class="light-blue darken-4">
					<div class="nav-wrapper">
					  <a routerLink="/" class="brand-logo center">
					  	<i class="material-icons f-size-medium">mail</i>
					  	Suggestions Box
					  </a>
					</div>
				</nav>
			</div>
			`
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
