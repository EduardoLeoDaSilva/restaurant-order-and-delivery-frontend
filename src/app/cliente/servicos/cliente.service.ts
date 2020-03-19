import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from './../../modelos/cliente.modelo';
import { ServicosAppService } from './../../outrosServicos/servicos-app.service';

@Injectable()
export class ClienteService {
 
  public baseUrl: string

   
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl) {
    this.baseUrl = baseUrl;
   }


  public cadastrar(cliente: Cliente): Observable<string> {
    const headers = new HttpHeaders().set('content-type', 'application/json')

    let body = this.obterBodyParaEnvio(cliente);

    return this.http.post<string>(`${this.baseUrl}cliente/cadastrar`, body, { headers })
  }

  public obterPorTel(tel: string): Observable<Cliente> {
    const headers = new HttpHeaders().set('content-type', 'application/json')



    return this.http.post<Cliente>(`${this.baseUrl}cliente/obterPortel`, JSON.stringify(tel), { headers })
  }

  public obterPorNomeV2(nome:string) :Observable<Cliente[]>{
    const headers = new HttpHeaders().set('content-type', 'application/json')

    return this.http.post<Cliente[]>(`${this.baseUrl}cliente/obterPorNomeV2`, JSON.stringify(nome), { headers })
  }

  public obterPorNome(nome: string): Observable<Cliente> {
    const headers = new HttpHeaders().set('content-type', 'application/json')
    


    return this.http.post<Cliente>(`${this.baseUrl}cliente/obterPorNome`,JSON.stringify(nome), { headers })
  }

  public atualizar(cliente: Cliente): Observable<Cliente> {
    const headers = new HttpHeaders().set('content-type', 'application/json')

    let body = this.obterBodyParaEnvio(cliente);

    return this.http.post<Cliente>(`${this.baseUrl}cliente/atualizar`, body, { headers })
  }



  private obterBodyParaEnvio(cliente: Cliente): any {
    let body = {
      id: cliente.id,
      nome: cliente.nome,
      telefone: cliente.telefone,
      endereco: cliente.endereco,
      pedidos: cliente?.pedidos
    }
    return body;
  }

}
