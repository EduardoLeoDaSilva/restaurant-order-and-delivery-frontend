import { PedidoService } from './../servicos/pedido.service';
import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { ServicosAppService } from 'src/app/outrosServicos/servicos-app.service';
import { Cliente } from 'src/app/modelos/cliente.modelo';
import { Pedido } from 'src/app/modelos/pedido.modelo';
import { getLocaleDateFormat, DatePipe, formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {


  cliente:Cliente
  pedido: Pedido
   @ViewChild('modalCadastroPedido') modalCadastro: ElementRef ;
  constructor(private servicosApp: ServicosAppService, private rd: Renderer2, private pedidoServico: PedidoService, private toastr: ToastrService) { }

   

  ngOnInit() {
    this.abrirCadastroPedidoModal();
  }


  abrirCadastroPedidoModal(){
    this.servicosApp.emissorClickAbriCadastroPedido.subscribe(cliente => {
  this.cliente = cliente;
   this.rd.setStyle(this.modalCadastro.nativeElement, 'display', 'block') 

    })
  }


  fecharModal(){
    this.rd.setStyle(this.modalCadastro.nativeElement, 'display', 'none') 
  }


  salvarPedido(quantidade: number){

      this.pedido = new Pedido();
      this.pedido.cliente = this.cliente;
      this.pedido.data =  new Date().toLocaleString('en').split(' ')[0];
      this.pedido.quantidade = quantidade
   this.pedidoServico.cadastrar(this.pedido).subscribe(retorno => {
     this.toastr.success(retorno,'Mensagem')
    this.rd.setStyle(this.modalCadastro.nativeElement, 'display', 'none') 

   }, erro => {
    this.toastr.error(erro,'Mensagem')

   } )
      console.log(this.pedido)
  }

}
