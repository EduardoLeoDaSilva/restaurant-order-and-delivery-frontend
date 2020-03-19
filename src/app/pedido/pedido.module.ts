import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoComponent } from './grafico/grafico.component';
import { RelatorioPedidoComponent } from './relatorio-pedido/relatorio-pedido.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { PedidoService } from './servicos/pedido.service';
import { ChartsModule } from 'ng2-charts';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MudaStatusPipe } from './pipes/muda-status.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GraficoComponent,
    RelatorioPedidoComponent,
    CadastroPedidoComponent,
    PedidosComponent,
    MudaStatusPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  providers:[PedidoService],
  exports:[CadastroPedidoComponent]
})
export class PedidoModule { }
