import { user_request } from './user_request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectDetailWithUserService {

  
  url="http://localhost:8080/allProject/"
  constructor(private httptemp: HttpClient) { }
  getUserCreatedProjects(user_id:any)
  {
  
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   // Get all the project data
  return this.httptemp.get(this.url+"getUserInfo/"+user_id,{headers});
  }

  storeUserRequestToJoin(user_request:user_request)
  {
    console.log(user_request);
    let data={
      "user_id":user_request.user_id,
      "request_user_id":user_request.request_user_id,
      "project_id":user_request.project_id,
      "message":user_request.message
    }
    console.log("service called")
    console.log(user_request);
    this.httptemp.post(this.url+"insertRequest",data).subscribe(value => value);
  }
}
