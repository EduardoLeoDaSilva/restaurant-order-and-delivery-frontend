import { ServicosAppService } from './../../outrosServicos/servicos-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  

  constructor(private serviceApp : ServicosAppService) { }
  


  ngOnInit() {
  }

  onInputProcuraCliente(valor:string){
    this.serviceApp.emitirEventoDeProcura(valor);
 }

}
