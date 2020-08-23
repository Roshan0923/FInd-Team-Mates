import { LoginService } from './../login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllProjectsService {

  
  projectDetail:any

  url="https://find-team-mates-spring.herokuapp.com/allProject/"
  constructor(private http: HttpClient,private _token:LoginService) { }
  getAllProjects()
  {
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': `Bearer ${this._token.getTokenFromLocal()}` 
      })
    };
   // Get all the project data
  return this.http.get(this.url,httpOptions);
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
