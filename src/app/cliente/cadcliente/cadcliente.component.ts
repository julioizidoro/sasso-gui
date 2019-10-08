import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.component.html',
  styleUrls: ['./cadcliente.component.scss']
})
export class CadclienteComponent implements OnInit {

   formulario: FormGroup;
   pessoaJuridica = false;
  pessoaFisica = false;
   isFirstOpen = false;
   oneAtATime: true;
   public maskCPF = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  // tslint:disable-next-line:max-line-length
  public maskCNPJ = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  public maskFONE = ['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  // tslint:disable-next-line:max-line-length
  public maskCELULAR = ['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public maskCEP = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
  public maskDATE = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/,  /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  setTipoJuridico() {
    if (this.formulario.get('tipojuridico').value === 'PF') {
      this.pessoaJuridica = false;
      this.pessoaFisica = true;
    } else {
      this.pessoaJuridica = true;
      this.pessoaFisica = false;
    }
  }

}
