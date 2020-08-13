import { CreateProjectService } from './create-project.service';
import { project_model } from './project_model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
export interface frontEnd{
  name: string;
}
export interface backEnd{
  name: string;
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})


export class CreateProjectComponent implements OnInit {

  //TO BE CHNAGE USER_ID
  user_id=1;
 public obj:project_model;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly separatorKeysCodesB: number[] = [ENTER, COMMA];

  visibleB = true;
  selectableB = true;
  removableB = true;
  addOnBlurB = true;

  frontEnd: frontEnd[] = [
  
  
  ];
  
  backEnd: backEnd[] = [
    
  
  ];


  constructor(private httpClient: HttpClient,private _formBuilder: FormBuilder,private service:CreateProjectService) {
    this.obj=new project_model();
   }

  projectForm:FormGroup
  ngOnInit(): void {

    this.projectForm = this._formBuilder.group({
      name: ['', Validators.required],frontEnd:[''],desription:[''],requirement:[''],backEnd:[''],date:[''],type:['']
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.frontEnd.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: frontEnd): void {
    const index = this.frontEnd.indexOf(fruit);

    if (index >= 0) {
      this.frontEnd.splice(index, 1);
    }
  }

  addBackEnd(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.backEnd.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removebackEnd(fruit: frontEnd): void {
    const index = this.backEnd.indexOf(fruit);

    if (index >= 0) {
      this.backEnd.splice(index, 1);
    }
  }

frontEndData=""
backEndData=""
  submit()
  {
    for(let temp of this.frontEnd)
      {
        if(this.frontEndData=="")
        {
          this.frontEndData=temp['name']
        }
      else
      {
        this.frontEndData=this.frontEndData+","+temp['name']
      }
      }
      for(let temp of this.backEnd)
      {
        if(this.backEndData=="")
        {
          this.backEndData=temp['name']
        }
      else
      {
        this.backEndData=this.backEndData+","+temp['name']
      }
      }
  //    project_model.name
    // console.log(this.frontEndData)
     console.log(this.projectForm.get("name").value)
     this.obj.project_name=this.projectForm.get("name").value
     this.obj.deadline=this.projectForm.get("date").value
     this.obj.project_description=this.projectForm.get("desription").value
     this.obj.team_mate_desctiption=this.projectForm.get("requirement").value
     this.obj.type=this.projectForm.get("type").value
     this.obj.back_end=this.backEndData;
     this.obj.front_end=this.frontEndData;
      this.obj.user_id=this.user_id;
      console.log(this.obj)
      this.service.create_project(this.obj);

  }


}
