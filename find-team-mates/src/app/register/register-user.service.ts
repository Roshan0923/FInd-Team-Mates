import { register_user } from './register_user';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  url="http://localhost:8080/"
  constructor(private http: HttpClient) { }

//   name:string;
//   email:string;
//   password:string;
//   linkedIn_url:string;
//   description:string;
//   technology:string;
//   language:string;
//  file:File
  registerUser(obj:register_user)
  {
    let formdata = new FormData();
    formdata.append("name",obj.name);
    formdata.append("password",obj.password);
    formdata.append("technology",obj.technology);
    formdata.append("description",obj.description);
    formdata.append("email",obj.email);
    formdata.append("linkedIn_url",obj.linkedIn_url);
    formdata.append("language",obj.language);
  formdata.append("pic_byte",obj.file);
    console.log(obj.file);
    console.log("calling service")
   // this.http.get(this.url).subscribe(value => value);;
    // console.log(obj);
     this.http.post(this.url+"register",formdata).subscribe(value => value);
  }
}
