import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  template: `<p>component Lifecycle`,
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}