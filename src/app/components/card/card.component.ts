import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  asset1 = '/assets/img/street.jpg';
  asset2 = '/assets/img/street2.jpg';
  asset3 = '/assets/img/street3.jpg';
  asset4 = '/assets/img/street4.jpg';

  changeTheUrl = true;
  constructor() {

    if (environment.production == true) {
      this.asset1 = '../briefcase' + this.asset1;
      this.asset2 = '../briefcase' + this.asset2;
      this.asset3 = '../briefcase' + this.asset3;
      this.asset4 = '../briefcase' + this.asset4;
    }

  }

  ngOnInit(): void {}
}
