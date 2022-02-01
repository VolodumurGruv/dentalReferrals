import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { mockData } from '../mockData/mockData';
import { MockData } from '../mockData/mockData.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {
  public userInfo: MockData = mockData;

  constructor() {}

  ngOnInit(): void {}
}
