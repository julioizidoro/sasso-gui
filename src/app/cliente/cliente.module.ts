import { CadclienteComponent } from './cadcliente/cadcliente.component';
import { ConsclienteComponent } from './conscliente/conscliente.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    ConsclienteComponent,
    CadclienteComponent,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    TextMaskModule,
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
  ],
  exports: [
    ConsclienteComponent,
    CadclienteComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ClienteModule { }
