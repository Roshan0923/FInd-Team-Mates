import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError, Observable, observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="https://find-team-mates-spring.herokuapp.com/"
  constructor(private http: HttpClient) { }


 loggedInStatus=new BehaviorSubject<boolean>(null)

  getToken(email:any,password:any)
  {
    let data={
      "emailid":email,
      "password":password
    }

    console.log("inside get token method")
    this.loggedInStatus.next(true);
 return this.http.post(this.url+"authenticate",data).pipe(
  tap(data => data));

  }
  
  loggedIn():boolean
  {
    console.log("SERVICE CLASS LOGGEDIN")
    this.loggedInStatus.next(true);
    return (!!sessionStorage.getItem('token'));
  }


  get isloggedIn()
  {
    console.log("SERVICE CLASS IS LODDED IN")
    console.log(this.loggedInStatus.asObservable)
    return this.loggedInStatus.asObservable;
  }
  getTokenFromLocal()
  {
    console.log("SERVICE CLASS GET TOKEN FROM LOCAL")
    this.loggedInStatus.next(true);
    return sessionStorage.getItem('token');
  }

  logout()
  {
    this.loggedInStatus.next(null);
  }
}
