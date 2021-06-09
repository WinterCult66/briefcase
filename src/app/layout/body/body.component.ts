import { Component, OnInit } from '@angular/core';
//import sampleData from './data.json';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  cards;
  constructor() { 
    //this.cards = Cards.dataInit;
  }
  
  ngOnInit(): void {
  }

}
