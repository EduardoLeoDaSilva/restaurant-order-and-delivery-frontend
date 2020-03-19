import { Pedido } from 'src/app/modelos/pedido.modelo';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../servicos/pedido.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-relatorio-pedido',
  templateUrl: './relatorio-pedido.component.html',
  styleUrls: ['./relatorio-pedido.component.css']
})
export class RelatorioPedidoComponent implements OnInit {

  constructor(private servicoPedido: PedidoService) { }
  
  ngOnInit() {
    this.obterQuantidadePedidosMes();
  }

  relatorio: Pedido[]
  total: any

  
//////////////////////////////////////////////////////
///////////Chart/////////////////////////


////mese variaveis///

janeiro:number =0
fevereiro: number =0
marco: number =0
abril:number =0
maio: number =0
junho: number =0
julho: number =0
agosto: number =0
setembro: number=0
outubro: number=0
novembro: number=0
dezembro: number=0

///////


public barChartOptions: ChartOptions = {
  responsive: true,
  scales: { xAxes: [{}], yAxes: [{}] },
  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'end',
    }
  }
};
public barChartLabels: Label[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho ', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [pluginDataLabels];

public barChartData: ChartDataSets[] = [
  { data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Total em quantidade' },
  { data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Total em reais'}
];


public obterQuantidadePedidosMes(){

  this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(0)).toLocaleString('en').split(',')[0]).subscribe(x => this.janeiro = x)
  this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(1)).toLocaleString('en').split(',')[0]).subscribe(x => {
    this.fevereiro = x;
  })
   this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(2)).toLocaleString('en').split(',')[0]).subscribe(x => this.marco = x)
  this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(3)).toLocaleString('en').split(',')[0]).subscribe(x => this.abril = x)
   this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(4)).toLocaleString('en').split(',')[0]).subscribe(x => this.maio = x)
   this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(5)).toLocaleString('en').split(',')[0]).subscribe(x => this.junho = x)
   this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(6)).toLocaleString('en').split(',')[0]).subscribe(x => this.julho =x)
   this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(7)).toLocaleString('en').split(',')[0]).subscribe(x => this.agosto =x)
   this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(8)).toLocaleString('en').split(',')[0]).subscribe(x => this.setembro =x)
   this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(9)).toLocaleString('en').split(',')[0]).subscribe(x => this.outubro =x)
   this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(10)).toLocaleString('en').split(',')[0]).subscribe(x => this.novembro =x)
   this.servicoPedido.ObterQuantidadePedidoMes(new Date(new Date().setMonth(11)).toLocaleString('en').split(',')[0]).subscribe(x => this.dezembro =x)
  setTimeout(() => {
    this.barChartData[0].data = [this.janeiro, this.fevereiro, this.marco, this.abril, this.maio, this.junho, this.julho,this.agosto, this.setembro, this.outubro, this.novembro, this.dezembro];
    this.barChartData[1].data = [this.calcularTotal(this.janeiro), this.calcularTotal(this.fevereiro),this.calcularTotal(this.marco) ,this.calcularTotal(this.abril), this.calcularTotal(this.maio), this.calcularTotal(this.junho),
      this.calcularTotal(this.julho), this.calcularTotal(this.agosto),this.calcularTotal( this.setembro), this.calcularTotal(this.outubro),this.calcularTotal(this.novembro) ,this.calcularTotal(this.dezembro)]; 
  }, 2000)

}

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}
 
  buscarRelatorio(data:string){
    this.servicoPedido.ObterRelatorioPorData(data).subscribe(retorno => {
      this.relatorio = retorno;
      this.calcularTotal(this.obterQuantidadeQuentinhasArray(this.relatorio));
    }, error => {
      console.log(error)
    })
  }

   
  private obterQuantidadeQuentinhasArray(relatorioACalcular: Pedido[]): number{
    let quantidade: number = 0;
    relatorioACalcular.forEach(item => {
      quantidade+= item.quantidade;
    });
    return quantidade;
  }


  calcularTotal(quantidade: number):number{
    let totalEmReais: any;

      totalEmReais = quantidade * 12; 

      this.total = totalEmReais;
      return totalEmReais;
  }

}
