import { project_model } from './../create-project/project_model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateProjectService {


  url="http://localhost:8080/project/"
  constructor(private http: HttpClient) { }
  getUserCreatedProjects(user_id:any)
  {
    console.log(typeof(user_id))
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   // let project_model=new project_model();
  return this.http.get("http://localhost:8080/project/getUSerCreatedProject/"+user_id,{headers});
  }

  deleteUserSelectedProject(user_id:any,project_id:any)
  {
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.delete(this.url+"deleteProject/"+user_id+"/"+project_id,{ headers })
  }

  private handleError(error: any) {
    return throwError(error);
  };

}
