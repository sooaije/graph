import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {Map} from "../model/map";
import {Observable} from "rxjs";

@Injectable()
export class MapService{

  constructor(private http:Http) {
  }

  getMapList(): Observable<Map[]> {
    return this.http.get('./src/app/data/map.json').map((res:Response) => res.json().data);
    // return this.http.get('http://157.179.134.16:28080/TestCloudera/rest/query/road').map((res:Response) => res.json());
  }

  getRoadName(){
    return this.http.get('./src/app/data/map.json').map((res:Response) => res.json().data);
  }

}
