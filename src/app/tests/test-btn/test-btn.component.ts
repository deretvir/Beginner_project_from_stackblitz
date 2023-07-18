import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-btn',
  template: `<button (click)="handleOnChangeStatus()">tesci</button>`,
  styleUrls: ['./test-btn.component.css']
})
export class TestBtnComponent  {


  @Output() onChangeStatus = new EventEmitter();

  handleOnChangeStatus(){
    this.onChangeStatus.emit();
  }

}