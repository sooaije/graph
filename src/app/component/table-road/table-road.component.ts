import { Component, OnInit } from '@angular/core';
import {MapService} from "../../service/map.service";
import {Tablelist} from "../../model/table-list";


@Component({
  selector: 'app-table-road',
  templateUrl: 'table-road.component.html',
  styleUrls: ['table-road.component.css']
})
export class TableRoadComponent implements OnInit {

  datatableList: Tablelist[] = [];
  check:boolean = false;
  constructor(private mapService:MapService){
 }
 ngOnInit() {
   this.showTable();
 }

 showTable(){

   this.mapService.getDataRoad().subscribe(
     (res:Tablelist[]) => {
       res.map((mapList) => {
         this.datatableList = [...this.datatableList, {
           id: mapList.id,
           text: mapList.text,
           time: mapList.time,
           road: mapList.road
         }];
       });
       if(this.datatableList.length > 0){
         this.check = true;
       }
      });

     }
}



