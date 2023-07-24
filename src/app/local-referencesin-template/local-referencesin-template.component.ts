import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-local-referencesin-template',
  template: `

  <label for="textInput">Note the red caret:</label>
<input id="textInput" type="text" #localReference #childRef size="32" />
  
  <button (click)="handleLocalReference(localReference)">handle local reference</button>
  `,
  styleUrls: ['./local-referencesin-template.component.css']
})
export class LocalReferencesinTemplateComponent  {

@ViewChild ('childRef', {static: true}) inputElement: ElementRef;

  handleLocalReference(x:HTMLInputElement){
console.log(x)
console.log(this.inputElement)




  }

}