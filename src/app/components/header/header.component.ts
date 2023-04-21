import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private loginService: LoginService,private route:Router) { }

  ngOnInit() {
    this.isLogin = this.loginService.getIsLoggin()
  }
  logout(){
    this.loginService.logout();
    this.route.navigate(["login"])
  }
  getIsLogin(){
    this.isLogin = this.loginService.getIsLoggin()
    return this.isLogin;
  }
}
