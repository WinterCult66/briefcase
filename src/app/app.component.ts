import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'briefcase';
  isLoad = true;

  constructor(){
    setTimeout(() => {
      this.isLoad = false;
    }, 1500);
  }
}
