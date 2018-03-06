import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public onGameStarted(): void {
    console.log('GameControl emitted game started');
  }

  public onGameStopped(): void {
    console.log('GameControl emitted game stopped');
  }
}
