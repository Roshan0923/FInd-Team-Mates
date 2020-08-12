import { project_model } from './project_model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  url="http://localhost:8080/"
  constructor(private http: HttpClient) { }


  create_project()
  {
   // let project_model=new project_model();

  }
}
