import { Observable } from 'rxjs';
import { ClienteService } from './../cliente/servicos/cliente.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Cliente } from '../modelos/cliente.modelo';


@Injectable({
  providedIn: 'root'
})
export class ServicosAppService {


  emissorDeEventos: EventEmitter<any> = new EventEmitter();
  emissorClickAbriCadastroPedido: EventEmitter<any> = new EventEmitter();

  constructor(private clienteService: ClienteService) { }



  emitirEventoDeProcura(valor: any) {
    this.emissorDeEventos.emit(valor);
  }

  // obterClientePorNomeOuTel(valor: string): Observable<Cliente> {
  //   let valorTratado = this.tratarNomeETelParaObtencaoDeCliente(valor);
  //   if (Number.isInteger(Number.parseInt(valorTratado))) {
  //     return this.clienteService.obterPorTel(valorTratado)
  //   } else {
  //     return this.clienteService.obterPorNome(valorTratado)
  //   }
  // }


  obterClientePorNomeV2(valor: string): Observable<Cliente[]> {
      return this.clienteService.obterPorNomeV2(valor);
  }



  abrirCadastroPedido(cliente:Cliente){
    this.emissorClickAbriCadastroPedido.emit(cliente);
  }



}
