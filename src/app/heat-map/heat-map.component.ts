import { Component, OnInit } from '@angular/core';
import {MapService} from "../service/map.service";
import {Map} from "../model/map";
import {logger} from "codelyzer/util/logger";
declare let google: any;

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {
  lat: number = 13.758889198303223;
  lng: number = 100.5344467163086;
  zoom: number = 12;
  heatMapList: any[] = [];
  check:boolean = false;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.getMapList().subscribe((res) => {
      console.log(res);
      res.map((mapList) => {
        this.heatMapList = [...this.heatMapList , {
          latitude: mapList.latitude,
          longtitude: mapList.longtitude,
          weight: mapList.road_num
        }];
      });
      this.check = true;
    });
  }
}
