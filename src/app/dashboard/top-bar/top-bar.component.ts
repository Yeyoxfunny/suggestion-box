import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
			<div class="navbar-fixed">
				<nav class="light-blue darken-4">
					<div class="nav-wrapper">
					  <a [routerLink]="['/dashboard']" class="brand-logo">
					  	<i class="material-icons f-size-medium">mail</i>
					  	Suggestions Box
					  </a>
					  <ul class="right hide-on-med-and-down">
				          <a href="#"><i class="material-icons right">exit_to_app</i>Salir</a>
				      </ul>
					</div>
				</nav>
			</div>
  			`,
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
