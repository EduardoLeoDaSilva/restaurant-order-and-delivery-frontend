import { Cliente } from './cliente.modelo'

export class Pedido{
    public id: number
    public quantidade: number
    public data: string
    public cliente: Cliente
    public status: number
}