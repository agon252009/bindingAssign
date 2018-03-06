import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  private counter: number;
  private intervalRef: any;
  constructor() { }

  ngOnInit() {
  }

  /**
   * startGameButtonClick
   */
  public startGameButtonClicked(): void {
    this.counter = 0;
    this.intervalRef = setInterval(() => {
                                     this.counter++;
                                     console.log(this.counter);
                                    }, 1000);
  }

  public stopGameButtonClicked(): void {
    clearInterval(this.intervalRef);
  }
}
