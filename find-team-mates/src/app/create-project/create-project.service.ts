import { LoginService } from './../login/login.service';
import { project_model } from './project_model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  url="https://find-team-mates-spring.herokuapp.com/"
  constructor(private http: HttpClient,private _token:LoginService) { }
  create_project(obj:project_model)
  {
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': `Bearer ${this._token.getTokenFromLocal()}` 
      })
    };
   // let project_model=new project_model();
 return  this.http.post(this.url+"project/create",obj,httpOptions)
  }

  //This method will be called when the user wants to submit the updated form
  update_project(obj:project_model,project_id:number)
  {
    console.log("Project id id "+project_id)
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': `Bearer ${this._token.getTokenFromLocal()}` 
      })
    };
   return this.http.put(this.url+"project/updateProject/"+project_id,obj,httpOptions);      
  }
}
