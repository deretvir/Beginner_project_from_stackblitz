import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: `<div>
  <app-test-paragraph></app-test-paragraph>
  <app-test-btn>
  </app-test-btn></div>`,
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}