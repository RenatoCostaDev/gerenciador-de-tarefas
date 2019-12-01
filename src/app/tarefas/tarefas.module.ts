import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService ,TarefaConcluidaDirective } from './shared';


import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CadastrarTarefaComponent } from './cadastrar';
import { ListarTarefaComponent } from './listar';
import { EditarTarefaComponent } from './editar';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers : [
    TarefaService
  ]
})
export class TarefasModule { }
