import { Injectable } from '@angular/core';
import {Article} from '../models/Article';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
import { coerceStringArray } from '@angular/cdk/coercion';
import { io, Socket } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  // private socket$!: WebSocketSubject<any>;
  // public messagesSubject = new BehaviorSubject<Article[]>([]);
  private socket: any;

  // public messages = this.messagesSubject$.pipe(switchAll(), catchError(e => { throw e }));
  
  
  public url = 'ws://localhost:14000'
  public connection = new WebSocket(this.url)

  constructor(private http:HttpClient) {
    // this.socket = io(this.url, {
    //   withCredentials: true,
    //   extraHeaders: {
    //     "my-custom-header": "abcd"
    //   }
    // })

    this.connection.onopen = () => {
      this.connection.send('Message From Client')
    }
    

    this.connection.onerror = (error) => {

      //console.log(`WebSocket error: ${error}`)
    }
  
    this.connection.onmessage = (e) => {
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
    return this.http.post('http://localhost:8080/Article', Article, {headers} ).subscribe();
  }

  public getArticle(_id: String): Observable<any>{
      return this.http.get(`http://localhost:8080/Article/` + _id);
  }

  public getArticlesByField(): Observable<any>{
    return this.http.get(`http://localhost:8080/Article/group/byField`)
  }
  public getArticlesByPage( page: Number): Observable<any>{
    return this.http.get(`http://localhost:8080/Article/page/` + page)
  }

  public getArticlesField( q: String): Observable<any>{
    return this.http.get(`http://localhost:8080/Article/?q=` + q)
  }
  
  public listenForNewItem = () => {
    return new Observable((observer) => {
      this.connection.onmessage = (e) => {
        let t = e
        observer.next(JSON.parse(e.data))
      }
      });
  };

  

}
