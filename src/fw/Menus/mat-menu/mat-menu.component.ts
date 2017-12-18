import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';



import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'fw-mat-menu',
  templateUrl: './mat-menu.component.html',
  styleUrls: ['./mat-menu.component.css']
})
export class MatMenuComponent implements OnInit {

  constructor( private menuService: MenuService) {
    console.log("items: "+menuService.items.length);
    console.log("item: "+ JSON.stringify(menuService.items[0]));
   }

  ngOnInit() {
  }

}
