import
{ BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeatMapComponent } from './component/heat-map/heat-map.component';
import { AgmCoreModule} from "angular2-google-maps/core";
import { MapService } from "./service/map.service";
import { SebmGoogleHeatMapDirectiveDirective } from './component/heat-map/directive/sebm-google-heat-map-directive.directive';
import { RoadNameComponent } from './component/road-name/road-name.component';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { GraphBarComponent } from './component/graph-bar/graph-bar.component';
import { GrapgPiComponent } from './component/grapg-pi/grapg-pi.component';
import { ChartModule } from "primeng/components/chart/chart";
import { DataTableModule } from "primeng/components/datatable/datatable";
import { TableRoadComponent } from "./component/table-road/table-road.component";
import { RouteModule } from "./routing/route.module";
import { ThaiLocationComponent } from './component/thai-location/thai-location.component';
import {ButtonModule} from "primeng/components/button/button";
import { MarkerThailocationComponent } from './component/marker-thailocation/marker-thailocation.component';
import { SebmGoogleMapMarkerClusterDirective } from './component/marker-thailocation/directive/sebm-google-map-marker-cluster.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeatMapComponent,
    SebmGoogleHeatMapDirectiveDirective,
    RoadNameComponent,
    GraphBarComponent,
    TableRoadComponent,
    GrapgPiComponent,
    ThaiLocationComponent,
    MarkerThailocationComponent,
    SebmGoogleMapMarkerClusterDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmHhQIiGXpOyrHejfUx5PyzrDPnjerGFo',
      libraries: ['visualization','places']
    }),
    ChartModule,
    DataTableModule,
    RouteModule,
    ButtonModule
  ],
  providers: [MapService,GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {}
