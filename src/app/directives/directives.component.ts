import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `<div>
    <h1>Directives</h1>
    <app-structutal-directives></app-structutal-directives>
    <app-attribute-directives></app-attribute-directives>

  </div>`,
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}