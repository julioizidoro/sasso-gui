import { Injectable } from '@angular/core';
import { Usuario } from './model/usuario';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient
  ) { }

  logar(user: string, password: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(env.baseApiUrl + 'usuarios/' + user + '/' + password);
  }
}
