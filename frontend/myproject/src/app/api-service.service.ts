import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  apiUrl = "http://localhost:8000";
  public headers = new HttpHeaders()
  .append('Content-Type', 'application/json')
  
  get(endpoint: string): Observable<any>{
    console.log(this.headers);
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  post(endpoint: string,payload): Observable<any>{
    return this.http.post(`${this.apiUrl}/${endpoint}`, payload);
  }

  put(endpoint: string, payload): Observable<any>{
    
    return this.http.put(`${this.apiUrl}/${endpoint}`, payload);
  }

  delete(endpoint, payload): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }

}
