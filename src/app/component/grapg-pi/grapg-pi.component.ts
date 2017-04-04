import { Component, OnInit } from '@angular/core';
import {MapService} from "../../service/map.service";
import {Map} from "../../model/map";

@Component({
  selector: 'app-grapg-pi',
  templateUrl: 'grapg-pi.component.html',
  styleUrls: ['grapg-pi.component.css']
})
export class GrapgPiComponent implements OnInit {

  data: any;
  labels:any[] = [];
  dataGraph:any[] = [];
  colors:any[] = ["#EF5350","#EC407A","#AB47BC","#7E57C2","#5C6BC0","#42A5F5","#29B6F6","#26C6DA","#26C6DA","#26A69A","#66BB6A","#9CCC65","#D4E157","#FFEE58","#FFCA28","#FFA726","#FF7043","#8D6E63","#BDBDBD","#78909C"];
  backgroundColor:any[] = [];

  constructor(private mapService:MapService) {

  }

  ngOnInit() {
    this.showBarGraph();
  }

  showBarGraph(){
    let i=0;
      this.mapService.getMapList().subscribe(
        (res:Map[]) => {
          res.map((mapList) => {
            this.labels = [...this.labels, mapList.road];
            this.dataGraph = [...this.dataGraph, mapList.road_num];
            this.backgroundColor = [ ...this.backgroundColor, this.colors[i]];
            i++;
            if(i >= (this.colors.length-1)) i = 0;
          });

          this.data = {
            labels: this.labels,
            datasets: [{
                data: this.dataGraph,
                backgroundColor: this.backgroundColor,
                hoverBackgroundColor: this.backgroundColor
              }]
          };
        });
    }
}

