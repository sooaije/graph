import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive, Input } from '@angular/core';
import 'js-marker-clusterer/src/markerclusterer.js';
import {Marker} from "../../../model/marker";

declare const google;
declare const MarkerClusterer;

@Directive({
  selector: 'sebm-google-map-marker-cluster'
})
export class SebmGoogleMapMarkerClusterDirective {
  @Input() location:Marker[];
  @Input() title:any[];
  result:any[] = [];

  initMarkers(){
    for (let i=0;i < this.location.length;++i){
      this.result = [...this.result, new google.maps.Marker({position: this.location[i], title: this.title[i].text})];
    }
    return this.result;
  }

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {
  }

  ngOnInit(){
    this.initializeMap();
  }

  initializeMap(){
    this.gmapsApi.getNativeMap().then(map => {
      let googleMarkers = this.initMarkers();
      new MarkerClusterer( map, googleMarkers, {imagePath: 'https://googlemaps.github.io/js-marker-clusterer/images/m'});
    });
  }

}


