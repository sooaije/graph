import { Component, OnInit } from '@angular/core';
import {MapService} from "../service/map.service";
import {Map} from "../model/map";
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
  mapList: Map[];
  heatMapList: any[] = [];
  check:boolean = false;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.getMapList().subscribe((res) => {
      this.mapList = res.data;
      for (let i = 0; i < this.mapList.length; i++) {
        this.heatMapList = [...this.heatMapList , {
          latitude: this.mapList[i].latitude,
          longtitude: this.mapList[i].longtitude,
          weight: this.mapList[i].road_num / 5
        }];
        this.check = true;
      }
    });
  }
}
