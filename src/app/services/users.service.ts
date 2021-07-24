import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public getUsers(): Observable<any>{
    var t = this.http.get('http://localhost:8080/Users')
    return t;
  }

  public getUser(_id: String): Observable<any>{
    return this.http.get(`http://localhost:8080/Users/` + _id);
}

  public deleteUser(_id: String): Observable<any>{
    var headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (localStorage.getItem("userToken")){
     console.log("theres a token")
     headers = headers.append('Authorization', `${localStorage.getItem("userToken")}` );
    }
    console.log(`Bearer ${localStorage.getItem("userToken")}` )
    console.log( headers)

      return this.http.delete(`http://localhost:8080/Users/` + _id , {"headers": headers});
      
    }

    public updateUser(_id: String): Observable<any>{
      var headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      if (localStorage.getItem("userToken")){
       console.log("theres a token")
       headers = headers.append('Authorization', `${localStorage.getItem("userToken")}` );
      }
      console.log(`Bearer ${localStorage.getItem("userToken")}` )
      console.log( headers)
  
        return this.http.put(`http://localhost:8080/Users/` + _id , {"headers": headers});
        
      }

      public getUsersAverageCities(): Observable<any>{
        return this.http.get(`http://localhost:8080/Users/q/differentCityCount`)
      }
}
