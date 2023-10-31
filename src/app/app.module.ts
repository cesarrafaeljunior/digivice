import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DigimonListComponent } from './digimon-list/digimon-list.component';
import { DigimonCardComponent } from './digimon-card/digimon-card.component';
import { DigiviceDeviceComponent } from './digivice-device/digivice-device.component';
import { DigimonService } from './services/digimon.service';

@NgModule({
  declarations: [
    AppComponent,
    DigimonListComponent,
    DigimonCardComponent,
    DigiviceDeviceComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DigimonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
