import { project_model } from './project_model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  url="http://localhost:8080/"
  constructor(private http: HttpClient) { }
  create_project(obj:project_model)
  {
   // let project_model=new project_model();
   this.http.post(this.url+"project/create",obj).subscribe(value => value);
  }

  //This method will be called when the user wants to submit the updated form
  update_project(obj:project_model,project_id:number)
  {
  
    this.http.put(this.url+"project/updateProject/"+project_id,obj).subscribe(value=>value);      
  }
}
