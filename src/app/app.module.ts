import { ServicosAppService } from './outrosServicos/servicos-app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './gerais/nav-bar/nav-bar.component';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';
import { NavbarDashboardComponent } from './gerais/navbar-dashboard/navbar-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { InputDataFormatDirective } from './directives/input-data-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavbarDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClienteModule,
    PedidoModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ChartsModule
  ],
  providers: [ServicosAppService, {provide: 'BASE_URL', useValue: 'http://192.168.1.67:90/casaDoSabor/api/' }],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
