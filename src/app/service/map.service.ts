import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {Map} from "../model/map";
import {Observable} from "rxjs";

@Injectable()
export class MapService{

  constructor(private http:Http) {
  }

  getMapList(){
    return this.http.get('http://157.179.8.122:28080/ClouderaImpala/rest/query/road').map((res:Response) => res.json().data);
    // return this.http.get('../src/app/data/map.json').map((res:Response) => res.json().data);
  }

  getRoadName(){
    return this.http.get('http://157.179.8.122:28080/ClouderaImpala/rest/query/road/name').map((res:Response) => res.json().data);
  }

  getDataRoad(){
    return this.http.get('http://157.179.8.122:28080/ClouderaImpala/rest/query/road/tableRoad').map((res:Response) => res.json().data);
  }

}
