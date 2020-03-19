import { ToastrService } from 'ngx-toastr';
import { PedidoService } from './../servicos/pedido.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/modelos/pedido.modelo';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {


  public listaPedidos: Pedido[]
  constructor(private servicoPedido: PedidoService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.obterTodosPedidosDoDia();
  }

  private obterTodosPedidosDoDia() {
    this.servicoPedido.ObterRelatorioPorData(new Date().toLocaleDateString('en')).subscribe(listaPedidos => {
      this.listaPedidos = listaPedidos;
    }, erro => {
      this.toast.error(erro.error, 'Erro!')
    })
  }

  onChangeStatus(pedido: Pedido, status: number) {
    pedido.status = status;
    this.servicoPedido.setarStatusPedido(pedido).subscribe(msg => {
      this.toast.success(msg, 'Sucesso')
      this.obterTodosPedidosDoDia();
    }, erro => {
      this.toast.error(erro.error, 'Erro')
      this.obterTodosPedidosDoDia();
    })
  }

}
