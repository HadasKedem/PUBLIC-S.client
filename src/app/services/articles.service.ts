import { Injectable } from '@angular/core';
import {Article} from '../models/Article';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
import { coerceStringArray } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  // private socket$!: WebSocketSubject<any>;
  public messagesSubject = new BehaviorSubject<Article[]>([]);

  // public messages = this.messagesSubject$.pipe(switchAll(), catchError(e => { throw e }));
  
  
  public url = 'ws://localhost:14000'
  public connection = new WebSocket(this.url)

  constructor(private http:HttpClient) {

    this.connection.onopen = () => {
      this.connection.send('Message From Client')
    }
     this.getArticles() .subscribe(list => {
      this.messagesSubject = list;
      this.messagesSubject.forEach(x => console.log(x))
  });

    this.connection.onerror = (error) => {

      console.log(`WebSocket error: ${error}`)
    }
  
    this.connection.onmessage = (e) => {
        console.log(e.data)
        this.messagesSubject.next( [...this.messagesSubject.getValue(), e.data])
        this.messagesSubject.subscribe(x=> console.log(x))
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
