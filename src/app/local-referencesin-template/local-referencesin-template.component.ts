import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-local-referencesin-template',
  template: `

  <label for="textInput">Note the red caret:</label>
<input id="textInput" type="text" #localReference #childRef size="32" />
  
  <button (click)="handleLocalReference(localReference)">handle local reference</button>
  <p>Local reference: {{inputElement.nativeElement}}</p>
  <p>@ViewChild   -  inputElement.nativeElement: {{inputElement.nativeElement.value}}</p>
  
  <div class="container">
  <app-ng-content-example>IPHONE X10</app-ng-content-example>
  <app-ng-content-example>Samsung S8</app-ng-content-example>
  <app-ng-content-example>IPHONE L20</app-ng-content-example>

  </div>
  `,
  styleUrls: ['./local-referencesin-template.component.css']
})
export class LocalReferencesinTemplateComponent  {

@ViewChild ('childRef', {static: true}) inputElement:ElementRef;

  handleLocalReference(x:HTMLInputElement){
console.log(x.value)
console.log(this.inputElement.nativeElement.value)




  }

}