import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:8080/"
  constructor(private http: HttpClient) { }


  getToken(email:any,password:any)
  {
    let data={
      "emailid":email,
      "password":password
    }
 return this.http.post(this.url+"authenticate",data).pipe(
  tap(data => data), catchError(this.handleError)
);
  }
  
  
  private handleError(error: any) {
    console.log("error occure")
    return "D";
  };


  loggedIn()
  {
    return !!sessionStorage.getItem('token');
  }

  getTokenFromLocal()
  {
    return sessionStorage.getItem('token');
  }
}
