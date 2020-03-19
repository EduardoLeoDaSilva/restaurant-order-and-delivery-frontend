import { PedidoModule } from './../pedido/pedido.module';
import { CadastroPedidoComponent } from './../pedido/cadastro-pedido/cadastro-pedido.component';
import { ClienteService } from './servicos/cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClienteProcuradoComponent } from './cliente-procurado/cliente-procurado.component';
import { FormsModule } from '@angular/forms';
import { InputDataFormatDirective } from '../directives/input-data-format.directive';



@NgModule({
  declarations: [
    CadastroClienteComponent,
    ClienteProcuradoComponent,
    InputDataFormatDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    PedidoModule
  ],
  providers:[ClienteService],
  exports:[ClienteProcuradoComponent]
})
export class ClienteModule { }
