import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-standart-button',
  templateUrl: './standart-button.component.html',
  styleUrls: ['./standart-button.component.scss']
})
export class StandartButtonComponent implements OnInit {
  @Input() thisAnchor: string;
  
  constructor() { }

  ngOnInit() {
  }

}
