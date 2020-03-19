import { Pedido } from 'src/app/modelos/pedido.modelo';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {


  baseUrl: string

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl) {
    this.baseUrl = baseUrl;
   }


  public cadastrar(pedido: Pedido): Observable<string> {
    const headers = new HttpHeaders().set('content-type', 'application/json')

    let body = this.obterBodyParaEnvio(pedido);

    return this.http.post<string>(`${this.baseUrl}pedido/cadastrar`, JSON.stringify(body), { headers })
  }


  public ObterRelatorioPorData(data: string): Observable<Pedido[]>{
    const headers = new HttpHeaders().set('content-type', 'application/json') 
    
    return this.http.post<Pedido[]>(`${this.baseUrl}pedido/obterRelatorioPorDia`, JSON.stringify(data), { headers })

  }


  public ObterQuantidadePedidoMes(data: string): Observable<number>{
    const headers = new HttpHeaders().set('content-type', 'application/json') 
    
    return this.http.post<number>(`${this.baseUrl}pedido/ObterQuantPedidoMes`, JSON.stringify(data), { headers })

  }
   
  public setarStatusPedido(pedido: Pedido):Observable<string>{
    const headers = new HttpHeaders().set('content-type', 'application/json') 
    return this.http.post<string>(`${this.baseUrl}pedido/setarPedidoStatus`, JSON.stringify(pedido), { headers })
  }
  
  private obterBodyParaEnvio(pedido: Pedido): any {
    let body = {
      id: pedido.id,
      data: pedido.data,
      quantidade: pedido.quantidade,
      Cliente: pedido.cliente
    }
    return body;
  }

}
