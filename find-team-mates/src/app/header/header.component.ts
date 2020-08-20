import { Router } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isloggedin:boolean;
  constructor(private service:LoginService,private route:Router) { }

  ngOnInit(): void {
    this.isloggedin= this.service.loggedIn();

  }

  logout()
  {
    sessionStorage.removeItem('ID');
    sessionStorage.removeItem('token')
    this.route.navigate(['/home']);
  }

}
