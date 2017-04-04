import { Component, OnInit } from '@angular/core';
import {MapService} from "../../service/map.service";
import {Map} from "../../model/map";

@Component({
  selector: 'app-graph-bar',
  templateUrl: 'graph-bar.component.html',
  styleUrls: ['graph-bar.component.css']
})
export class GraphBarComponent implements OnInit {

  data: any;
  labels:any[] = [];
  dataGraph:any[] = [];

  constructor(private mapService:MapService) {

  }

  ngOnInit() {
    this.showBarGraph();
  }

  showBarGraph(){
    this.mapService.getMapList().subscribe(
      (res:Map[]) => {
        res.map((mapList) =>{
          this.labels = [...this.labels,mapList.road];
          this.dataGraph = [...this.dataGraph,mapList.road_num];
        });

        this.dataGraph.push(0);
        this.data = {
          labels: this.labels,
          datasets: [{
              label: 'ถนน',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: this.dataGraph
            }],
        }

      }
    );


  }

}

