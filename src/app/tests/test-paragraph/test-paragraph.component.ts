import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-paragraph',
  template:`tescik {{onStatus}}`,
  styleUrls: ['./test-paragraph.component.css']
})
export class TestParagraphComponent {
@Input() onStatus:boolean;

}