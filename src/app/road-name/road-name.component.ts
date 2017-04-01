import { Component, OnInit } from '@angular/core';
import { Road } from "../model/road";
import { MapService} from "../service/map.service";
import {MapsAPILoader} from "angular2-google-maps/core";
declare let google: any;


@Component({
  selector: 'app-road-name',
  templateUrl: './road-name.component.html',
  styleUrls: ['./road-name.component.css']
})
export class RoadNameComponent implements OnInit {

  roadNameList: any[];
  roadLocationList: any[] = [];

  constructor(private mapService: MapService,private mapsAPILoader:MapsAPILoader) {
  }

  ngOnInit() {
    this.mapService.getRoadName().subscribe((res) => {
      this.roadNameList = res;
      // this.roadNameList.map((roadList) => {
      //   this.getLocationRoad(roadList);
      // });

      let i=0;
      let num = this.roadNameList.length;
      let a = setInterval(() => {
        this.getLocationRoad(this.roadNameList[i]);
        if(i == (num-1)){
          clearInterval(a);
        }
        i++;
      },500);

    });
    console.log(this.roadLocationList);
  }

  getLocationRoad(roadList){

    this.mapsAPILoader.load().then(() => {
      let geocoder = new google.maps.Geocoder();
      let address = roadList.road;
      geocoder.geocode( { 'address': address}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {

            // results[0].geometry.location.latitude
            // resultss[0].geometry.location.longitude
            this.roadLocationList = [...this.roadLocationList , {
              road: roadList.road,
              // district: roadList.district,
              lat:results[0].geometry.location.lat(),
              lng:results[0].geometry.location.lng()
            }];
          console.log(roadList.road, results[0].geometry.location.lat(), results[0].geometry.location.lng());
        }
      });
    });


  }

}
