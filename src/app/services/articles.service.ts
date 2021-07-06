import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:Http) { }

  getArticles(){
    return this.http.get('http://localhost:8080').pipe(map(response => response.json()));
  }
}
