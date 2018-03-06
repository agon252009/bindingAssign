import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly _numList: Array<number> = new Array();

  public onNumberGenerated(value: number): void {
    console.log(value);
  }
}
