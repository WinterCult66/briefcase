import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoAsset = "/assets/img/Logo.JPG";
  changeTheUrl = true;

  constructor() { 

    if (this.changeTheUrl == true) {
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
