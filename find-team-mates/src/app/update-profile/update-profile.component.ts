import { Router } from '@angular/router';
import { UpdateProfileService } from './update-profile.service';
import { model } from './model';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ProjectDetailWithUserService } from './../project-detail-with-user-info/project-detail-with-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  tempForm: FormGroup
  user_id = sessionStorage.getItem('ID');
  user_data: any[];
  technology: any[];
  languale: any[];

  selectedFile: File;
  message: string;

  public obj: model;
  constructor(private service: ProjectDetailWithUserService, private _formBuilder: FormBuilder,private updateService:UpdateProfileService,private route:Router) { }

  ngOnInit(): void {
    this.user_data = this.getUSerInfo(this.user_id);
    console.log(this.user_data);
    this.obj = new model();
  }

  getUSerInfo(user_id: any) {
    var user_info: any = [];
    this.service.getUserInfo(user_id).subscribe(data => {
      let temp = data['image'];
      data['image'] = 'data:image/jpeg;base64,' + temp;
      user_info.push(data);

      var tech_slpit = this.user_data[0].technology.split(',');
      this.technology = tech_slpit;
      var language = this.user_data[0].language.split(',');
      this.languale = language;
    });
    return user_info;
  }

  saveUpdatedUserInfo(form: NgForm) {
    this.obj.file=this.user_data[0].image;
    if (form.valid) {
      console.log(form.value)
      console.log("valid form")
      this.obj.name = form.value.name;
      this.obj.email = this.user_data[0].email;
      this.obj.description = form.value.description;
      this.obj.technology = form.value.technology;
      this.obj.language = form.value.language;
      this.obj.file = this.selectedFile;
      this.obj.linkedIn_url = form.value.linkedIn_url;
      this.updateService.updateProfileDetails(this.obj,this.user_id).subscribe((data)=>{
        window.location.reload();
      },
      (error)=>{
        window.location.reload();
      }
      );
    }

  }


  onFileSelected(event) {
    const inputNode: any = document.querySelector('#file');

    //this.selectedFile = inputNode.files[0];
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    //  this.onUpload();
  }




}
