import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GrapgPiComponent} from "../component/grapg-pi/grapg-pi.component";
import {GraphBarComponent} from "../component/graph-bar/graph-bar.component";
import {HeatMapComponent} from "../component/heat-map/heat-map.component";
import {TableRoadComponent} from "../component/table-road/table-road.component";
import {ThaiLocationComponent} from "../component/thai-location/thai-location.component";
import {MarkerThailocationComponent} from "../component/marker-thailocation/marker-thailocation.component";


const routes: Routes = [
  { path: '', redirectTo: '/heat', pathMatch: 'full'},
  { path: 'pi',  component: GrapgPiComponent },
  { path: 'bar',  component: GraphBarComponent },
  { path: 'heat',  component: HeatMapComponent },
  { path: 'table', component: TableRoadComponent },
  { path: 'location', component: ThaiLocationComponent },
  { path: 'marker', component: MarkerThailocationComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RouteModule { }

