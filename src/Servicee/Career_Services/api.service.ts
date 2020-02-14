import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = environment.baseurl;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllCareer(): Observable<any> {
    return this.http.get(this.baseurl + '/career/',
    {headers: this.httpHeaders}); 
  }
}
