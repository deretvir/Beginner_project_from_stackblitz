import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-paragraph',
  template:`<p>property binding, value from Parent: {{onStatus}}</p>
  <p [innerHtml]="propertyBindingFromClass"></p>
  <input [(ngModel)]="twoWayDataBinding">
  <p>Two way data binding (ngModel): {{twoWayDataBinding}} </p>
  `,
  styleUrls: ['./test-paragraph.component.css']
})
export class TestParagraphComponent {
@Input() onStatus:boolean;
propertyBindingFromClass="propertyBindingFromClass";
twoWayDataBinding:string='';
}