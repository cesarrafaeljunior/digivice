import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigimonListComponent } from './digimon-list/digimon-list.component';
import { DigimonCardComponent } from './digimon-card/digimon-card.component';
import { DigiviceDeviceComponent } from './digivice-device/digivice-device.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonListComponent,
    DigimonCardComponent,
    DigiviceDeviceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
