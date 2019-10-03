import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario/model/usuario';

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
  ) { }

  ngOnInit() {
    this.uusario = new Usuario();
    this.formulario = this.formBuilder.group({
      user: [null],
      password: [null],
    });

  }

  logar() {
    this.uusario = this.formulario.value;
    if (this.uusario.user === 'sasso') {
      if ( this.uusario.password  === '123456' ) {
        this.router.navigate(['/']);
      }
    }
  }
}
