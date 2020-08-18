import { Router } from '@angular/router';
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
  constructor(private service:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  login()
  {
    console.log("calling get token method");
    this.service.getToken(this.email,this.password).subscribe(data=>{
  
      console.log(data);
      if(data['user_id'])
      {
        this.message="Success";
        sessionStorage.setItem('token',data['token']);
        sessionStorage.setItem('ID',data['user_id']);
        this.route.navigate(['/allProjects']);
      }
      else
      {
        this.message="Please enter valid credentails";
      }
     
    })
  }


}
