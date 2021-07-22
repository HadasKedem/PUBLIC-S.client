import { Injectable } from '@angular/core';
import {Article} from '../models/Article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:HttpClient) { }
  private socket$!: WebSocketSubject<any>;
  private messagesSubject$ = new Subject();
  public messages$ = this.messagesSubject$.pipe( catchError(e => { throw e }));
  


  public getArticles(): Observable<any>{
    var t = this.http.get('http://localhost:8080/Article')
    return t;
  }

  public addArticle(Article: Article): Observable<any>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
        const body=JSON.stringify(Article);
    console.log("got to service ")
    return this.http.post('http://localhost:8080/Article', Article);
  }

  public getArticle(_id: String): Observable<any>{
      return this.http.get(`http://localhost:8080/Article/` + _id);
  }

  public getArticlesByField(): Observable<any>{
    return this.http.get(`http://localhost:8080/Article/group/byField`)
  }
  

  
  public connect(): void {
  
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      const messages = this.socket$.pipe(
        tap({
          error: error => console.log(error),
        }), catchError(_ => EMPTY));
      this.messagesSubject$.next(messages);
      console.log(messages)
    }
  }
  
  private getNewWebSocket() {
    return webSocket('ws://localhost:14000');
  }
  sendMessage(msg: any) {
    this.socket$.next(msg);
  }
  close() {
    this.socket$.complete(); }
}
