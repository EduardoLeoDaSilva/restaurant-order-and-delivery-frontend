import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { RelatorioPedidoComponent } from './pedido/relatorio-pedido/relatorio-pedido.component';
import { PedidosComponent } from './pedido/pedidos/pedidos.component';


const routes: Routes = [
  {path: 'cadastroCliente', component: CadastroClienteComponent},
  {path: 'relatorioPedido', component: RelatorioPedidoComponent},
  {path: 'pedidos', component: PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
