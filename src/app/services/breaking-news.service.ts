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
  // private socket$!: WebSocketSubject<any>;
  // private messagesSubject$ = new Subject();
  // public messages$ = this.messagesSubject$.pipe( catchError(e => { throw e }));
  
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
  //   return webSocket('ws://localhost:14001');
  // }
  // sendMessage(msg: any) {
  //   this.socket$.next(msg);
  // }
  // close() {
  //   this.socket$.complete(); }
  }