
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  template: `<button (click)="emitOnAddItem()">add</button>
  `,
  styles: [`button{cursor: pointer;}
  `],
})
export class BtnComponent {

 @Output() onAddItem= new EventEmitter()

  emitOnAddItem(){
    this.onAddItem.emit()
  }
 
}
