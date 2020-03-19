import { ServicosAppService } from './../../outrosServicos/servicos-app.service';
import { Cliente } from './../../modelos/cliente.modelo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cliente-procurado',
  templateUrl: './cliente-procurado.component.html',
  styleUrls: ['./cliente-procurado.component.css']
})
export class ClienteProcuradoComponent implements OnInit {


  //@Input() cliente: Cliente
  //cliente:Cliente
  @Input('clientesAchados') listaClientesAchados:Cliente[]
  constructor(private servicosApp:ServicosAppService) { }

  ngOnInit() {
  }


  botaAbrirCadastroPedidoClick(cliente:Cliente){
        this.servicosApp.abrirCadastroPedido(cliente);
  }
}
