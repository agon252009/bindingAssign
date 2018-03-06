import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  private _counter: number;
  private _intervalRef: any = null;

  @Output()
  public numberGenerated: EventEmitter<{}> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public startGameButtonClicked(): void {
    this.startCounter();
  }

  public stopGameButtonClicked(): void {
    this.stopCounter();
  }

  private startCounter(): void {
    if (this._intervalRef != null) {
      this.stopCounter();
    }

    this._counter = 0;
    this._intervalRef = setInterval(() => {
                                     this._counter++;
                                     this.numberGenerated.emit(this._counter);
                                    }, 1000);
  }

  stopCounter(): void {
    if (this._intervalRef == null) {
      return;
    }
    clearInterval(this._intervalRef);
    this._intervalRef = null;
  }
}
