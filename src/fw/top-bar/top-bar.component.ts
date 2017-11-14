import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';


import {FrameworkConfigService } from '../services/framework-config.service';

@Injectable()
@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {

  constructor(private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

}
