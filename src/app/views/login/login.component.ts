import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from 'src/app/usuario/login/auth.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  uusario: Usuario;



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService : AuthService,
  ) { }

  ngOnInit() {
    this.uusario = new Usuario();
    this.formulario = this.formBuilder.group({
      user: [null],
      password: [null],
    });

  }

  logar() {
    console.log('logar');
    this.uusario = this.formulario.value;
    console.log(this.uusario.user);
    this.authService.fazerLogin(this.uusario);
  }
}
