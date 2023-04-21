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
    for (let i = 0; i < this.registroUsuarios.length; i++) {
      this.registroUsuarios[i].usuario
      if (this.registroUsuarios[i].usuario === nombre && this.registroUsuarios[i].password === password) {
        this.isLoggin = true;
      }
    }
    return this.isLoggin;
  }
  logout(){
    this.isLoggin = false;
  }
  getIsLoggin(){
    return this.isLoggin;
  }
}
