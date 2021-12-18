import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  register(data: any){
    return this.http.post<{"id": number, "token": string}>('https://reqres.in/api/register', data)
  }

  login(data: any){
    return this.http.post<{"token": string}>('https://reqres.in/api/login', data)
  }
}
