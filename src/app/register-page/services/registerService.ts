import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class registerService {
  constructor(private http: HttpClient) { }

 public SaveRegistration(newUser: any, response: any): Observable<any> {
   console.log(newUser)
    return this.http.post('http://localhost:8080/Users/', newUser, response);
  }
 }