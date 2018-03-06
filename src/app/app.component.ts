import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly _numList: Array<number> = new Array();

  public get numList(): Array<number> {
    return this._numList;
  }

  public onNumberGenerated(value: number): void {
    if (value === 1) {
      this._numList.length = 0;
    }

    this._numList.push(value);
  }
}
