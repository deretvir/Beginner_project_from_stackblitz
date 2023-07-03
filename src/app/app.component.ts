import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <app-input></app-input>
  <app-btn (onAddItem)="addItem()"></app-btn>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  item="";
  arr:string[]=[];

  addItem(){
  //  this.arr.push(this.item);
    console.log('hehe');
    
  }

}
