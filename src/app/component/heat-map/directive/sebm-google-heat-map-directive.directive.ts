import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive, Input } from '@angular/core';
declare let google: any;

@Directive({
  selector: 'sebm-google-heat-map'
})
export class SebmGoogleHeatMapDirectiveDirective {
  @Input() data:any[] = [];
  @Input() radius:number;

  heatMap:any;
  heatMapList:any[] = [];
  position = "ถนนนางลิ้นจี่";
  constructor(private gmapsApi: GoogleMapsAPIWrapper) { }

  ngOnInit(){
    this.getHeatMap();
  }

  getHeatMap() {
    this.gmapsApi.getNativeMap().then(map => {
      this.data.map((mapList) => {
        this.heatMapList = [...this.heatMapList, {
          location: new google.maps.LatLng(mapList.latitude, mapList.longtitude),
          weight: mapList.weight
        }];
      });
      this.heatMap = new google.maps.visualization.HeatmapLayer({data: this.heatMapList, radius: this.radius});
      this.heatMap.setMap(map);
    });
  }

}
