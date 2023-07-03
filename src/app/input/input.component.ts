import { Component, Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-input',
  template: `<input type="text"  [(ngModel)]="itemName"  value="item" (input)="updateItemName()">
  <p>{{itemName}}</p>`,
  styleUrls: ['./input.component.css']
})
export class InputComponent  {

  itemName:string="";
@Output() itemNameChange= new EventEmitter<string>();

updateItemName(){
this.itemNameChange.emit(this.itemName);
console.log('das')
}


}