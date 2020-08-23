import { LoginService } from './../login/login.service';
import { user_request } from './user_request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectDetailWithUserService {

  
  url="https://find-team-mates-spring.herokuapp.com/allProject/"
  constructor(private httptemp: HttpClient,private _token:LoginService) { }
  getUserInfo(user_id:any)
  {
  
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': `Bearer ${this._token.getTokenFromLocal()}` 
      })
    };
   // Get all the project data
  return this.httptemp.get(this.url+"getUserInfo/"+user_id,httpOptions);
  }

  storeUserRequestToJoin(user_request:user_request)
  {
   // console.log(user_request);
   const httpOptions = {
    headers: new HttpHeaders({      
      'Authorization': `Bearer ${this._token.getTokenFromLocal()}` 
    })
  };
    let data={
      "user_id":user_request.user_id,
      "request_user_id":user_request.request_user_id,
      "project_id":user_request.project_id,
      "message":user_request.message
    }
    console.log("service called")
    console.log(user_request);
  return  this.httptemp.post(this.url+"insertRequest",data,httpOptions);
  }

  getregisteredUserList(project_id:number)
{
    console.log("inside the service method to get the registered user for the project id=>"+project_id);
   const httpOptions = {
    headers: new HttpHeaders({      
      'Authorization': `Bearer ${this._token.getTokenFromLocal()}` 
    })
  };
   
    console.log("service called")
   return this.httptemp.get(this.url+"getRegisteredUserList/"+project_id,httpOptions);
}}
