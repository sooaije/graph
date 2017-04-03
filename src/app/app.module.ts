import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { AgmCoreModule} from "angular2-google-maps/core";
import { MapService } from "./service/map.service";
import { SebmGoogleHeatMapDirectiveDirective } from './heat-map/directive/sebm-google-heat-map-directive.directive';
import { RoadNameComponent } from './road-name/road-name.component';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';


@NgModule({
  declarations: [
    AppComponent,
    HeatMapComponent,
    SebmGoogleHeatMapDirectiveDirective,
    RoadNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmHhQIiGXpOyrHejfUx5PyzrDPnjerGFo',
      libraries: ['visualization','places']
    })
  ],
  providers: [MapService,GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {}
