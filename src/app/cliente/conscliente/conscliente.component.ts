import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conscliente',
  templateUrl: './conscliente.component.html',
  styleUrls: ['./conscliente.component.scss']
})
export class ConsclienteComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime: true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
      cnpj: [null],
    });
  }

}
