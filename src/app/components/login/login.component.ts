import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from 'src/app/model/author.model';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myFormLogin!: FormGroup
  public myFormRegistro!: FormGroup

  usuario!: string;
  contraseña!: string;
  usuarioCorrecto: boolean = false;
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private route: Router) { }

  ngOnInit() {
    this.myFormLogin = this.createForm();
    this.myFormRegistro = this.createForm();


  }
  private createForm(): FormGroup {
    return this.fb.group(
      {
        usuario: ['', [Validators.required]],
        password: ['', Validators.required],
      }
    )

  }
  public submit() {
    if (this.myFormLogin.invalid) {
      alert("Digite todos los datos")
      return;
    }
    this.validarUsuario(this.myFormLogin.value.usuario, this.myFormLogin.value.password);
    if (this.usuarioCorrecto) {
      alert("Usuario Logueado")
      console.log(this.usuarioCorrecto);
      this.route.navigate(['index'])
    }

  }
    public registrar() {
    if (this.myFormRegistro.invalid) {
      return;
    }

    this.myFormRegistro.reset();
  }
  public get f(): any {
    return this.myFormLogin.controls;
  }
  public get f2(): any {
    return this.myFormRegistro.controls;
  }
  validarUsuario(nombre: string, password: string) {
    this.usuarioCorrecto = this.loginService.validarUsuario(nombre, password);
  }
}
