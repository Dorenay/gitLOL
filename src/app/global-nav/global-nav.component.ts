import { Component, OnInit } from '@angular/core';
import { ANCHORS } from './../anchors';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {
  anchors = ANCHORS;
  constructor() { }

  ngOnInit() {
  }

}
