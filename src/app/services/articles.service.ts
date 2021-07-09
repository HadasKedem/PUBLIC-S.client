import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:Http) { }

  getArticles(){
    var t = this.http.get('http://localhost:8080/Article/getAll').pipe(map(response => response.json()))
    console.log(t)
    return t;
  }
}
