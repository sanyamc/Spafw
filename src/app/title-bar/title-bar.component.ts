import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TitleBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
