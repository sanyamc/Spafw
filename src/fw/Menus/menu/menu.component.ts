import { Component, OnInit, Injectable } from '@angular/core';

import {MenuService} from '../../services/menu.service';
@Injectable()
@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
