import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private usuairoAutenticado = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();


  constructor(
    private router: Router,
  ) { }

  fazerLogin(usuario: Usuario) {
    console.log();
    if (usuario.user === 'sasso' &&  usuario.password  === '123456' ) {
        this.usuairoAutenticado = true;
        this.router.navigate(['/']);
        this.mostrarMenuEmitter.emit(true);
      } else {
        this.usuairoAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
    this.usuairoAutenticado;
    }
}
