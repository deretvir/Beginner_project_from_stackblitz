import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  template: `
  <h2>Attribute Directives</h2>
  <div (click)="changeErrorStatus()" class="attributeDirectiveBox"></div>
  `,
  styles:['.attributeDirectiveBox{ width:50px; height:50px; border:2px solid black; cursor:pointer;']
})
export class AttributeDirectivesComponent {

  isError:boolean=false;

  changeErrorStatus():void{
    this.isError=!this.isError;
  }

}

//attributeDirectiveError