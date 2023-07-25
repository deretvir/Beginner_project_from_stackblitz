import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  template: `

  <div class="container">
  <div>
  <p>IPHONE X10</p>
  </div>

  <div>
  <p>Samsung S8</p>
  </div>

  <div>
  <p>IPHONE L20</p>
  </div>
  </div>
  `,
  styleUrls: ['./ng-content-example.component.css']
})
export class NgContentExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}