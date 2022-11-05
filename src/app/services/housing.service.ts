import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ipropertybase } from '../models/ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpClient: HttpClient) { }

  getAllProperties(SellRent: number):Observable<Ipropertybase[]>{
    return this.httpClient.get('assets/properties.json').pipe(
      map(data=> {
        const propertiesArray: Array<Ipropertybase> = [];
        for(const id in data) {
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
          propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
}
}
