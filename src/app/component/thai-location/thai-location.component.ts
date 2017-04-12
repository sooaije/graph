import { Component, OnInit } from '@angular/core';
import {MapsAPILoader} from "angular2-google-maps/core";
import {MapService} from "../../service/map.service";
declare let google: any;

@Component({
  selector: 'app-thai-location',
  templateUrl: './thai-location.component.html',
  styleUrls: ['./thai-location.component.css']
})
export class ThaiLocationComponent implements OnInit {
  districtNameList: any[];
  districtLocationList:any[] = [];
  count = 0;
  constructor(private mapService:MapService,private mapsAPILoader:MapsAPILoader) { }

  ngOnInit() {
    this.mapService.getProvince().subscribe((res) => {
      this.districtNameList = res;
    });
  }

  getLocationRoad(){
    let district = this.districtNameList[this.count];
    // console.log(roadList);

    this.mapsAPILoader.load().then(() => {
      let geocoder = new google.maps.Geocoder();
      let address = "องค์การบริหารส่วน"+district.changwat_t;
      geocoder.geocode( {'address': address}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          this.districtLocationList = [...this.districtLocationList , {
            name: district.changwat_t ,
            // district: roadList.district,
            lat:results[0].geometry.location.lat(),
            lng:results[0].geometry.location.lng()
          }];
          console.log(this.count+"/"+(this.districtNameList.length-1),district.changwat_t, results[0].geometry.location.lat(), results[0].geometry.location.lng());
          this.count++;
        }
      });
    });

    if(this.count < this.districtNameList.length){
      setTimeout(() => {
        this.getLocationRoad();
      },200);
    }
  }

  onclick(){
    this.getLocationRoad();
  }

}
