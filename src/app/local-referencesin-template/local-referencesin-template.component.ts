import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-referencesin-template',
  template: `

  <label for="textInput">Note the red caret:</label>
<input id="textInput" type="text" #localReference size="32" />
  
  <button (click)="handleLocalReference(localReference)">handle local reference</button>
  `,
  styleUrls: ['./local-referencesin-template.component.css']
})
export class LocalReferencesinTemplateComponent  {

  handleLocalReference(x:HTMLInputElement){
console.log(typeof x.value)
  }

}