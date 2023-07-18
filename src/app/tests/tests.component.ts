import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  template: `<div>
  <app-test-paragraph   [onStatus]="status"></app-test-paragraph>
  <app-test-btn (onChangeStatus)="changeStatus()">
  </app-test-btn ></div>`,
  styleUrls: ['./tests.component.css']
})
export class TestsComponent  {

  status:boolean=true;

  arr1:number[]=[1,2,3,4,];

  changeStatus(){
    this.status = !this.status;
  }


}