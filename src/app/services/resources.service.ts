import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {ResourceResponse} from "../types/user";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpService) { }

  getResources(){
    return this.http.get<ResourceResponse>('https://reqres.in/api/unknown')
  }
}
