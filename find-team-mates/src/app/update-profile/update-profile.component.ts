import { Router, ActivatedRoute } from '@angular/router';
import { UpdateProfileService } from './update-profile.service';
import { model } from './model';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ProjectDetailWithUserService } from './../project-detail-with-user-info/project-detail-with-user.service';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  private readonly notifier: NotifierService;
  tempForm: FormGroup
  user_id = sessionStorage.getItem('ID');
  user_data: any[];
  technology: any[];
  languale: any[];

  selectedFile: File;
  message: string;

  public obj: model;
  constructor(private _aroute:ActivatedRoute,notifierService: NotifierService,private service: ProjectDetailWithUserService, private _formBuilder: FormBuilder,private updateService:UpdateProfileService,private route:Router) {
    this.notifier = notifierService;
   }

  ngOnInit(): void {
    this.user_data = this.getUSerInfo(this.user_id);
    console.log(this.user_data);
    this.obj = new model();

    this._aroute.queryParams
    .subscribe(params => {
      if(params.updated !== undefined && params.updated === 'true') {
        this.notifier.notify("success", "Your Profile updated successfully");
      }
      if(params.updated !== undefined && params.updated === 'false') {
        this.notifier.notify("info", "Error while updating your profile");
      }});
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
      this.obj.name = form.value.name;
      this.obj.email = this.user_data[0].email;
      this.obj.description = form.value.description;
      this.obj.technology = form.value.technology;
      this.obj.language = form.value.language;
      this.obj.file = this.selectedFile;
      this.obj.linkedIn_url = form.value.linkedIn_url;
      this.updateService.updateProfileDetails(this.obj,this.user_id).subscribe((data)=>{
        console.log("data")
        console.log(data)
        this.notifier.notify("success","Profile updated successfully")
      },
      (error)=>{
        console.log("error")
        if(error.status==200){
          this.route.navigate(['updateProfile'],{queryParams: { updated: 'true'}})
       
        }
        else{
          this.route.navigate(['updateProfile'],{queryParams: { updated: 'false'}})
         
        }

     
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
