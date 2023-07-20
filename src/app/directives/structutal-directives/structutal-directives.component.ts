import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structutal-directives',
  template: `
  <h2>Structural Directives</h2>
  <button  (click)="handleStatus()" >change status</button>
  <p *ngIf="status; else elseBlock">Text to show if status=true</p>
<ng-template #elseBlock> <p>Block when status=false</p></ng-template>
  <div>
  <li *ngFor="let item of arr1; let i=index">{{status?arr1.length-i:i}}: {{item}}</li>
  </div>

  `,
  styleUrls: ['./structutal-directives.component.css']
})
export class StructutalDirectivesComponent  {

  status:boolean=false;

handleStatus(){
  this.status=!this.status;
}
  
arr1:number[]=[1,2,3,4,5]

}