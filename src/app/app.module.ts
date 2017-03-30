import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import { MapService } from "./service/map.service";
import { SebmGoogleHeatMapDirectiveDirective } from './heat-map/directive/sebm-google-heat-map-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeatMapComponent,
    SebmGoogleHeatMapDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmHhQIiGXpOyrHejfUx5PyzrDPnjerGFo',
      libraries: ['visualization']
    })
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule {}
