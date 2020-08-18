import { register_user } from './register_user';
import { RegisterUserService } from './register-user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegisterComponent implements OnInit {

  messageData:any;
 public obj:register_user
  constructor(private service:RegisterUserService,private httpClient: HttpClient,private _formBuilder: FormBuilder) {
    this.obj=new register_user();
   }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thridFormGroup :FormGroup

  selectedFile: File;
  message: string;

  srcResult:any
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],email:[''],password:[''],linkedInUrl:['']
    });
    this.secondFormGroup = this._formBuilder.group({
      desription: ['', Validators.required],technology:[''],language:['']
    });
    this.thridFormGroup = this._formBuilder.group({
      image:['']
    });
  }

  submit()
  {
  this.obj.name= this.firstFormGroup.value.name;
  this.obj.email= this.firstFormGroup.value.email;
  this.obj.password= this.firstFormGroup.value.password;
  this.obj.linkedIn_url= this.firstFormGroup.value.linkedInUrl;
  this.obj.description= this.secondFormGroup.value.desription;
  this.obj.technology= this.secondFormGroup.value.technology;
  this.obj.language= this.secondFormGroup.value.language;
  this.obj.file=this.selectedFile;
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  console.log(uploadImageData)
  //this.obj.file=uploadImageData;
 // console.log(this.obj)
 console.log("BElow is from obj")
    console.log(uploadImageData);

    this.service.registerUser(this.obj).subscribe((data) =>{
      
     this.messageData="SuccessFully Registered"
     },
     (error)=>{

       console.log(error);
       if(error.status==200)
       {
         this.messageData="Succussfull registration"
       }
      else if(error.status==500)
       {
         this.messageData="server error"
       }
     else  if(error.status==409)
       {
         this.messageData="Email-id already exist in the DB"
       }
       else
       {
         this.messageData="Error Occured"
       }
    
   } 
    );
  }

  onFileSelected(event) {
    const inputNode: any = document.querySelector('#file');
  
    //this.selectedFile = inputNode.files[0];
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile)
  //  this.onUpload();
  }

  onUpload() {
 //   console.log(this.selectedFile);
    console.log("upload method called")
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    console.log(typeof(uploadImageData));
  console.log(uploadImageData)

     }

     
}
