import { LoginService } from './../login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllProjectsService {

  
  projectDetail:any

  url="http://localhost:8080/allProject/"
  constructor(private http: HttpClient,private _token:LoginService) { }
  getUserCreatedProjects()
  {
  
    // let headers = new HttpHeaders()
    // headers.append('Authorization',`Bearer `)
    // headers.set('Content-Type', 'application/json');
    // let options = {headers:HttpHeaders};

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
