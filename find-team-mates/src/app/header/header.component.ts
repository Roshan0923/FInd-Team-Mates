
import { from, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  userSub: Subscription;

  status:boolean;
//  loginStatus$ : Observable<boolean>;
  

  //isloggedin:boolean;
  constructor(private service:LoginService,private route:Router) {
   
   }
  ngOnInit(): void {
    this.userSub = this.service.loggedInStatus.subscribe(user => {
      this.status = user ? true : false;

     
    })

  }



  logout()
  {
    sessionStorage.removeItem('ID');
    sessionStorage.removeItem('token')
    this.service.logout();
    this.route.navigate(['/home']);
  }

}
