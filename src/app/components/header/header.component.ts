import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean = true;
  constructor(private loginService: LoginService,private route:Router) { }

  ngOnInit() {

  }
  getLogin(login:boolean){
    this.isLogin = login;
  }
  logout(){
    this.loginService.logout();
    this.isLogin = false;
    this.route.navigate(["login"])
  }
  getIsLogin(){
    console.log(this.isLogin);
    this.loginService.getIsLoggin().subscribe(
      (data:boolean) => {this.getLogin(data)
      console.log(data);
      }
    )
     console.log(this.isLogin);}
}
