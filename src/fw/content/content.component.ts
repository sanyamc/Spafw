import { Component, OnInit, Injectable } from '@angular/core';

import { MenuService } from '../services/menu.service';

@Injectable()
@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
