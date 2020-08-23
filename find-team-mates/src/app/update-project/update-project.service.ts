import { LoginService } from './../login/login.service';
import { project_model } from './../create-project/project_model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateProjectService {


  url="https://find-team-mates-spring.herokuapp.com/project/"
  constructor(private http: HttpClient,private _token:LoginService) { }
  getUserCreatedProjects(user_id:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': `Bearer ${this._token.getTokenFromLocal()}` 
      })
    };
   
   // let project_model=new project_model();
  return this.http.get("https://find-team-mates-spring.herokuapp.com/project/getUSerCreatedProject/"+user_id,httpOptions);
  }

  deleteUserSelectedProject(user_id:any,project_id:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': `Bearer ${this._token.getTokenFromLocal()}` 
      })
    };
   
   return this.http.delete(this.url+"deleteProject/"+user_id+"/"+project_id,httpOptions)
  }

  private handleError(error: any) {
    return throwError(error);
  };

}
