import { Component, OnInit } from '@angular/core';
import {MapService} from "../../service/map.service";
import {Mapthailocation} from "../../model/mapthailocation";
import {Marker} from "../../model/marker";
import {ButtonModule} from 'primeng/primeng';
import {TagInput} from "../../model/tag-input";


@Component({
  selector: 'app-marker-thailocation',
  templateUrl: './marker-thailocation.component.html',
  styleUrls: ['./marker-thailocation.component.css']
})
export class MarkerThailocationComponent implements OnInit {
  map = {lat: 13.758889198303223, lng: 100.5344467163086, zoom: 8};
  locationList:Mapthailocation[] = [];
  markList:Marker[] = [];
  title:any[] = [];
  check:boolean = false;
  items:TagInput[] = [];
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  getMarkerCluster(items:TagInput[]){
    this.markList = [];
    this.title = [];
    this.mapService.getLocation(items).subscribe((res) => {
      this.locationList = res;
      this.locationList.map((local:Mapthailocation) => {
        this.markList = [...this.markList , { lat:local.subdistrictlat,lng:local.subdistrictlong }];
        this.title = [...this.title , { text:local.text }];
      });
      this.check = true;
    });
  }

  onItemAdded(){
    this.getMarkerCluster(this.items);
  }

  onItemRemoved(){
    this.getMarkerCluster(this.items);
  }
}

