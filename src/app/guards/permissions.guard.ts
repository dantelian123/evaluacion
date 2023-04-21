import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard{
  constructor(private router: Router, private loginService:LoginService){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.getIsLoggin()){
      return true
    }
    //redireccion al login
    this.router.navigate([''])
    return false;
  }


}
