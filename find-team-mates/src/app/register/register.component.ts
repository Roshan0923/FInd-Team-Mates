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

  constructor(private httpClient: HttpClient,private _formBuilder: FormBuilder) { }
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
    console.log(this.firstFormGroup);
    console.log(this.secondFormGroup);
  
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    this.selectedFile = inputNode.files[0];
    console.log(this.selectedFile)
  }

  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  console.log(uploadImageData)
    // //Make a call to the Spring Boot Application to save the image
    // this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.message = 'Image uploaded successfully';
    //     } else {
    //       this.message = 'Image not uploaded successfully';
    //     }
    //   }
    //   );
     }
}
