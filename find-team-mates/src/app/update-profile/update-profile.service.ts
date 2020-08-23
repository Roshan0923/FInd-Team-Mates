import { model } from './model';
import { LoginService } from './../login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  url="https://find-team-mates-spring.herokuapp.com/updateProfile/"
  constructor(private http: HttpClient,private _token:LoginService) { }

  updateProfileDetails(obj:model,user_id:any)
  {
    let formdata = new FormData();
    formdata.append("name",obj.name);
    formdata.append("technology",obj.technology);
    formdata.append("description",obj.description);
    formdata.append("email",obj.email);
    formdata.append("linkedIn_url",obj.linkedIn_url);
    formdata.append("language",obj.language);
  formdata.append("pic_byte",obj.file);
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': `Bearer ${this._token.getTokenFromLocal()}` 
      })
    };
    console.log("Inside the servie method of update profile")
    return this.http.post(this.url+user_id,formdata,httpOptions)
    
  }
}
