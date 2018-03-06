import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
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
