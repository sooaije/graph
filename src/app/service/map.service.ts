import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";

@Injectable()
export class MapService {

  constructor(private http:Http) { }

  getMapList(){
    return this.http.get('./src/app/data/map.json').map((res:Response) => res.json());
  }


}
