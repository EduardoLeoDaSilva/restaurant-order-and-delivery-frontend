import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.modelo';
import { Endereco } from 'src/app/modelos/endereco.modelo';
import { ClienteService } from '../servicos/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {


  public cliente: Cliente
  constructor(private clienteService: ClienteService, private toastr: ToastrService, private rd : Renderer2) { }

  ngOnInit() {
    this.cliente = new Cliente();
    this.cliente.endereco = new Endereco();
  }

  cadastrar(formCadastro: any){
    this.clienteService.cadastrar(this.cliente).subscribe(msg => {
      this.toastr.success(msg, "Mensagem")
      formCadastro.reset();
      console.log(formCadastro)

      debugger;
    }, erro => {
      console.log(erro)
      this.toastr.error(erro.error, "Mensagem")

    })
  }

  validar(nome:NgModel, telefone:NgModel, rua:NgModel, numero:NgModel){
    let invalid = 'INVALID'
    if(nome.control.status == invalid || telefone.control.status == invalid || rua.control.status == invalid || numero.control.status == invalid){
      this.toastr.warning('Campos inválidos, verifique-os!', 'Alerta')
    }
  }

}
