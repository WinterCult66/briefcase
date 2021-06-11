import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoAsset = "/assets/img/Logo.JPG";
  changeTheUrl = true;

  constructor() { 

    if (environment.production == true) {
      this.logoAsset = '../briefcase' + this.logoAsset;
      
    }
  }

  ngOnInit(): void {
  }

  scrollToElement(elementId): void {
    const element = document.querySelector("#"+elementId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

}
