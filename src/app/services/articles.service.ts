import { Injectable } from '@angular/core';
import {Article} from '../models/Article';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  
  
  public url = 'ws://localhost:14000'
  public connection = new WebSocket(this.url)

  constructor(private http:HttpClient) {

    this.connection.onopen = () => {
      this.connection.send('Message From Client')
  }
  
  this.connection.onerror = (error) => {

      console.log(`WebSocket error: ${error}`)
  }
  
  this.connection.onmessage = (e) => {
    console.log(e.data)
      }
  }
  // private socket$!: WebSocketSubject<any>;
  // private messagesSubject$ = new Subject();
  // public messages$ = this.messagesSubject$.pipe( catchError(e => { throw e }));
  


  public getArticles(): Observable<any>{
    var t = this.http.get('http://localhost:8080/Article')
    return t;
  }

  public addArticle(Article: Article){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
        const body=JSON.stringify(Article);
    console.log(Article)
    return this.http.post('http://localhost:8080/Article', Article, {headers} ).subscribe();
  }

  public getArticle(_id: String): Observable<any>{
      return this.http.get(`http://localhost:8080/Article/` + _id);
  }

  public getArticlesByField(): Observable<any>{
    return this.http.get(`http://localhost:8080/Article/group/byField`)
  }
  // public getMapReduce(): Observable<any> {
  //   return this.http.get(`http://localhost:8080/Article/mapreduce`)
  // }
  // public getNumberArticle(): Observable<any> {
  //   return this.http.get(`http://localhost:8080/Article/numberArticle`)
  // }

  
  // public connect(): void {
  
  //   if (!this.socket$ || this.socket$.closed) {
  //     this.socket$ = this.getNewWebSocket();
  //     const messages = this.socket$.pipe(
  //       tap({
  //         error: error => console.log(error),
  //       }), catchError(_ => EMPTY));
  //     this.messagesSubject$.next(messages);
  //     console.log(messages)
  //   }
  // }
  
  // private getNewWebSocket() {
  //   return webSocket('ws://localhost:14000');
  // }
  // sendMessage(msg: any) {
  //   this.socket$.next(msg);
  // }
  // close() {
  //   this.socket$.complete(); }

 

  

}
