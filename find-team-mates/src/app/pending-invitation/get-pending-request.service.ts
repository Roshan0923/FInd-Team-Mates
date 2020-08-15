import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPendingRequestService {

 
  url="http://localhost:8080/project/"
  email_notification_url="http://localhost:8080/sendingEmail"
  constructor(private http: HttpClient) { }
  getPendingRequest(user_id:any)
  {
    console.log(typeof(user_id))
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   // let project_model=new project_model();
  return this.http.get(this.url+"getInvitation/"+user_id,{headers});
  }

  sendEmail(data:any,isAdded:number)
  {
    var dataT=isAdded;
    console.log(isAdded);
    let body_data=
    {
      "project_name":data.project_name,
"to":data.request_user_email,
"from":"findteammates.team@gmail.com",
"requested_user_name":data.requested_user_name,
"num":dataT,
"subject":"Team request joining decision",
"project_id":data.project_id,
"requested_user_id":data.requested_user_id

    }
     return this.http.post(this.email_notification_url,body_data)
  }


}
