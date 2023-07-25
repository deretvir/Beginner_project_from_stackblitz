import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  template: `
  <div class="phone">
  <p><ng-content></ng-content></p>
  </div>
  `,
  styleUrls: ['./ng-content-example.component.css']
})
export class NgContentExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}