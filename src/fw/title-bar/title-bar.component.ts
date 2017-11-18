import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';

import {ScreenService} from '../services/screen.service';
import { MenuService } from '../services/menu.service';

@Injectable()
@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css'],
})
export class TitleBarComponent implements OnInit {

  constructor(public screenService: ScreenService, public menuService: MenuService ) { }

  ngOnInit() {
  }

}
