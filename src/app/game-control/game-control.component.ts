import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()
  gameStarted: EventEmitter<{}> = new EventEmitter();

  @Output()
  gameStopped: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * startGameButtonClick
   */
  public startGameButtonClicked(): void {
    this.gameStarted.emit();
  }

  public stopGameButtonClicked(): void {
    this.gameStopped.emit();
  }
}
