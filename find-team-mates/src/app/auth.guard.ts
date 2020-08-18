import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth:LoginService,private _route:Router){}
  canActivate():boolean{
    if(this._auth.loggedIn()){
      return true
    }
    else
    {
      this._route.navigate(['/home'])
      return false;
    }
  
  }
  
}
