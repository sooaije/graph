import { Component, OnInit } from '@angular/core';
import {MapService} from "../service/map.service";
import {MapList} from "../model/map-list";

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {

  map = {lat: 13.758889198303223, lng: 100.5344467163086, zoom: 12};
  heatMapList: MapList[] = [];

  constructor(private mapService: MapService) { }

  ngOnInit() {

    this.mapService.getMapList().subscribe((res) => {
      res.map((mapList) => {
        this.heatMapList = [...this.heatMapList , {
          latitude: mapList.latitude,
          longtitude: mapList.longtitude,
          weight: mapList.road_num
        }];
      });
    });
  }

}
