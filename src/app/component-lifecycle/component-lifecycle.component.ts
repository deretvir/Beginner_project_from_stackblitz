

import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  template: `<p>{{ timeLeft }}</p>
  <p #local>LocalReferrence</p>`
})
export class ComponentLifecycleComponent implements OnInit, OnDestroy {
  timeLeft: number = 10;
  intervalId: any;
  @Input()  counter:number;

 constructor(){
   
 }

  ngOnInit() {
    // Start the timer when the component is initialized
    this.startTimer();
    

  }

  ngOnDestroy() {
    // Stop the timer and clean up resources when the component is destroyed
    this.stopTimer();
    console.log('The end')
  }

  startTimer() {
    // Update the display every second
    this.intervalId = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft === 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }
}
