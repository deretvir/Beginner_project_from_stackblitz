import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  <app-input   (itemNameChange)="updateItem($event)"></app-input>
  <app-btn (onAddItem)="addItem()" ></app-btn>
  <app-tests></app-tests>
<app-directives></app-directives>
<app-local-referencesin-template></app-local-referencesin-template>
  
<app-component-lifecycle>
lifecycle comp
</app-component-lifecycle>

  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  item="";
  arr:string[]=[];

  updateItem(itemName:string){
    this.item=itemName;
  }

  addItem(){
  this.arr.push(this.item);
    console.log(this.arr);
  }

}
