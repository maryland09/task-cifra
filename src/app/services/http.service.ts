import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, {params})
  }

  public put<T>(url: string, data: any, params?: HttpParams): Observable<T> {
    return this.http.put<T>(url, data,{params})
  }

  public post<T>(url: string, data: any, params?: HttpParams): Observable<T> {
    return this.http.post<T>(url, data,{params})
  }

  public delete<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(url, {params})
  }


}
