import { LoginService } from './login/login.service';
import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { AuthGuard } from './auth.guard';


@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next)
  {
    let authService=this.injector.get(LoginService);
    let TokenizedReq=req.clone({
        setHeaders:{
        //  Authorization: `Bearer ${authService.getTokenFromLocal()}`
        Authorization: 'Bearer XX.yy.zz'
        }
    })

    return next.handle(TokenizedReq);
  }
}
