import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:any
  email:any;
  password:any
  showSpinner=false;
  constructor(private service:LoginService,private route:Router,private _aRoute:ActivatedRoute) { }

  infoMessage = '';
  ngOnInit(): void {
    this._aRoute.queryParams
    .subscribe(params => {
      if(params.registered !== undefined && params.registered === 'true') {
          this.infoMessage = 'Registration Successful! Please Login!';
      }
    });
  }

  login()
  {

    if(!this.email || this.email=="" || !this.password || this.password=="")
    {
      this.message="email-id and Password are mandatory"
    }
    else{    this.showSpinner=true;
    console.log("calling get token method");
    this.service.getToken(this.email,this.password).subscribe(data=>{
  
      console.log(data);
      if(data['user_id'])
      {
        this.showSpinner=false;
        this.message="Success";
        sessionStorage.setItem('token',data['token']);
        sessionStorage.setItem('ID',data['user_id']);
        this.route.navigate(['/allProjects']);
      }
      else
      {
        this.showSpinner=false
        this.message="Please enter valid credentails";
      }
     
    },(error)=>{
      if(error.status==0)
      {
        this.showSpinner=false;
        this.message="Server Error please try agian later"
      }
    })
  }


  }
}
