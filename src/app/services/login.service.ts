import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggin: boolean = false;
  constructor() { }
  registroUsuarios = [
    {
      usuario: "ricardo",
      password: '123456',

    },
    {
      usuario: "coello",
      password: '123456',
    },
    {
      usuario: "bryan",
      password: '123456',
    }
  ];

  validarUsuario(nombre: string, password: string): boolean {
    if (localStorage.getItem("usuario") !== null) {
      console.log("existe local");

      this.isLoggin = true;
    } else {
      for (let i = 0; i < this.registroUsuarios.length; i++) {
        this.registroUsuarios[i].usuario
        if (this.registroUsuarios[i].usuario === nombre && this.registroUsuarios[i].password === password) {
          this.isLoggin = true;
          localStorage.setItem("usuario", JSON.stringify(this.registroUsuarios[i]))
        }
      }
    }
    return this.isLoggin;
  }
  logout() {
    this.isLoggin = false;
  }
  getIsLoggin():Observable<boolean> {
    return new Observable<boolean>(observer=>{
      observer.next(this.isLoggin)
    });
  }
}
