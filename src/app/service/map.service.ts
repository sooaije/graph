import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {Map} from "../model/map";
import {Observable} from "rxjs";
import {TagInput} from "../model/tag-input";

@Injectable()
export class MapService{

  constructor(private http:Http) {
  }
    // getMapList(){
  //   return this.http.get('http://157.179.8.122:28080/ClouderaImpala/rest/query/road').map((res:Response) => res.json().data);
  //   // return this.http.get('../src/app/data/map.json').map((res:Response) => res.json().data);
  // }
  //
  // getRoadName(){
  //   return this.http.get('http://157.179.8.122:28080/ClouderaImpala/rest/query/road/name').map((res:Response) => res.json().data);
  // }
  //
  getDataRoad(){
    return this.http.get('http://157.179.16.239:8080/ClouderaImpala/rest/query/road/tableRoad').map((res:Response) => res.json().data);
  }

  getMapList(){
    return this.http.get('http://157.179.16.239:8080/ClouderaImpala/rest/query/road').map((res:Response) => res.json().data);
    // return this.http.get('../src/app/data/map.json').map((res:Response) => res.json().data);
  }

  getRoadName(){
    return this.http.get('http://157.179.16.239:8080/ClouderaImpala/rest/query/road/name').map((res:Response) => res.json().data);
  }

  getDistrict(){
    return this.http.get('./src/app/data/District.json').map((res:Response) => res.json().data);
  }

  getProvince(){
    return this.http.get('./src/app/data/Province.json').map((res:Response) => res.json().data);
  }

  getLocation(items:TagInput[]){
    let baseUrl = 'http://157.179.16.239:8080/ClouderaImpala/rest/query';
    baseUrl += '/text/provinc';
    for (let i = 0; i < items.length; i++) {
      if(i == 0){
        baseUrl += '?q='+items[i].value;
      }else{
        baseUrl += '&q='+items[i].value;
      }
    }
    console.log(baseUrl);
    return this.http.get(baseUrl).map((res:Response) => res.json().data);
  }
}
