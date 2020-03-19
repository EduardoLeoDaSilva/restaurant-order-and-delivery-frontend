import { Cliente } from './../../modelos/cliente.modelo';
import { ServicosAppService } from './../../outrosServicos/servicos-app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent implements OnInit {

   valorProcurado: any;
   clienteAchado:Cliente
   ativado:string
   listaClientesAchados: Cliente[] = new Array<Cliente>();

  constructor(private servicoApp : ServicosAppService, private route: Router, private toast: ToastrService) { }
  
  ngOnInit() {
    this.ObterEventoDeBusca();
    this.trocarLinkAtivo();
  }

  public ObterEventoDeBusca():void
  {  
    this.servicoApp.emissorDeEventos.subscribe(valorEmitido => {
      this.valorProcurado = valorEmitido
      this.obterClienteProcuradoV2(this.valorProcurado);
    });
  }




  public obterClienteProcuradoV2(valor: string){
    this.servicoApp.obterClientePorNomeV2(valor).subscribe(clientesRetorno => this.listaClientesAchados = clientesRetorno,erro => {
      this.toast.error(erro.error,'Erro!');
    }) 
   
}

  private descearializarCliente(clienteRetorno: any){
    this.clienteAchado = new Cliente();

      this.clienteAchado.id = clienteRetorno.id;
      this.clienteAchado.nome = clienteRetorno.nome;
      this.clienteAchado.telefone = clienteRetorno.telefone;
      this.clienteAchado.endereco = clienteRetorno.endereco;
      this.clienteAchado.pedidos = clienteRetorno.pedidos;
      console.log("Entrou aqui")
  }

  trocarLinkAtivo(){
      this.route.events.subscribe(rota => {
        this.ativado = this.route.url;
     })
  }

}
