import { Endereco } from './endereco.modelo';
import { Pedido } from './pedido.modelo';
export class Cliente{
    public id: number
    public nome: string
    public telefone : string
    public endereco: Endereco
    public pedidos:Pedido[]

}