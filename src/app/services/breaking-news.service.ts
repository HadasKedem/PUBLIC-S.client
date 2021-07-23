// import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
// // const WebSocket = require('ws')


// @Injectable({
//   providedIn: 'root'
// })
// export class BreakingNewsService {

  
//   constructor(private socket: Socket) { 
// console.log("starting client")
// }

// // getDocument(id: string) {
// //   this.socket.emit('connection', id);
// // }
// const url = 'ws://localhost:14001'

// const connection = new WebSocket(this.url) 

// connection.onopen = () => {
//   connection.send('Message From Client')
// }

// connection.onerror = (error: any) => {
//   console.log(`WebSocket error: ${error}`)
// }

// connection.onmessage = (e: { data: any; }) => {
//   console.log(e.data)
// }}
// }

import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class BreakingNewsService {
  // public getArticles(): Observable<any>{
  //   var t = this.http.get('http://localhost:8080/Article')
  //   return t;
  // }
  }