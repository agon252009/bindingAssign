import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  private _num: number;

  public get num(): number {
    return this._num;
  }

  @Input()
  public set num(value: number) {
    this._num = value;
  }

  constructor() { }

  ngOnInit() {
  }
}
