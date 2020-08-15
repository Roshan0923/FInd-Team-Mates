import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllProjectsService {

  
  projectDetail:any

  url="http://localhost:8080/allProject/"
  constructor(private http: HttpClient) { }
  getUserCreatedProjects()
  {
  
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   // Get all the project data
  return this.http.get(this.url,{headers});
  }

  saveProjectInfo(data:any)
  {
    this.projectDetail=data;
  }
  retriveProjectInfo()
  {
    return this.projectDetail;
  }
}
