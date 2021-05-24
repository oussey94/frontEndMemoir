import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.css']
})
export class NotationComponent implements OnInit, OnChanges {

  public starWidth:number;
  @Input()
  public rating:number=2;

  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(): void {

    this.starWidth=this.rating * 125/5;
  }

  ngOnInit(): void {
  }

  public sendRating(): void {
    this.starRatingClicked.emit("la note est de "+this.rating);
  }

}
