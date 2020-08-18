import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
 return this.http.post(this.url+"authenticate",data,{responseType:'text' as 'json'});
  }
  

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }

  getTokenFromLocal()
  {
    return localStorage.getItem('token');
  }
}
