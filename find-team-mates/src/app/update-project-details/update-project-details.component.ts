import { CreateProjectService } from './../create-project/create-project.service';
import { project_model } from './../create-project/project_model';
import { UpdateProjectService } from './../update-project/update-project.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreUserSelectedDataService } from './../update-project/store-user-selected-data.service';
import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from "angular-notifier";

export interface frontEnd{
  name: string;
}
export interface backEnd{
  name: string;
}

@Component({
  selector: 'app-update-project-details',
  templateUrl: './update-project-details.component.html',
  styleUrls: ['./update-project-details.component.css']
})
export class UpdateProjectDetailsComponent implements OnInit {

  user_id=+sessionStorage.getItem('ID');
  data:any;
  errorMessage:any;
  isError=false;
  private readonly notifier: NotifierService;
  public obj:project_model;
  constructor(notifierService: NotifierService,private _aRoute:ActivatedRoute,private updateService:CreateProjectService,private router:Router,private userDataService:StoreUserSelectedDataService,private _formBuilder: FormBuilder,private service:UpdateProjectService) { 
    this.obj=new project_model();
    this.notifier = notifierService;
  }
  projectForm:FormGroup

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

  ngOnInit(): void {
  

      this.data=this.userDataService.retriveUserData();

      console.log(this.data.length)
      if(this.data.length==0){
  this.isError=true;
      }
      else{
      this.projectForm = this._formBuilder.group({
        name: ['', Validators.required],frontEnd:[''],desription:[''],requirement:[''],backEnd:[''],date:[''],type:['']
      });

    var front_split=this.data.front_end.split(',');
    for(let data of front_split)
    {
      this.frontEnd.push({name: data.trim()});
    }
    //
    var back_split=this.data.back_end.split(',');
    for(let data of back_split)
    {
      this.backEnd.push({name: data.trim()});
    }
  }
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
  onUpdateClick()
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
      this.obj.project_name=this.projectForm.get("name").value
      this.obj.deadline=this.projectForm.get("date").value
      this.obj.project_description=this.projectForm.get("desription").value
      this.obj.team_mate_desctiption=this.projectForm.get("requirement").value
      this.obj.type=this.projectForm.get("type").value
      this.obj.back_end=this.backEndData;
      this.obj.front_end=this.frontEndData;
       this.obj.user_id=this.user_id;
       console.log(this.obj)
       console.log("Calling update method");
       this.updateService.update_project(this.obj,this.data.project_id).subscribe((data)=>{
        this.router.navigate(['/projectById'],{queryParams: { updated: 'true'}});
       },(error)=>{
         this.errorMessage="Error while upding.Server error please try agin later"
       });
     // let project_model=new project_model();
  }

  onDeletClick()
  {
    this.service.deleteUserSelectedProject(this.user_id,this.data.project_id).subscribe(data=>
      {
        this.router.navigate(['/projectById'],{queryParams: { deleted: 'true'}});
      });
  }


}
