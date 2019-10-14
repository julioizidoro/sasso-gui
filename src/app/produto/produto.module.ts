import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadprodutoComponent } from './cadproduto/cadproduto.component';
import { ConsprodutoComponent } from './consproduto/consproduto.component';

@NgModule({
  declarations:  [
    CadprodutoComponent,
    ConsprodutoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConsprodutoComponent,
    CadprodutoComponent,
  ]
})
export class ProdutoModule { }
