import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbModule } from 'mdb-angular-ui-kit';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MdbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
