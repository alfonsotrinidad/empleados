import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmpleadoFomrComponent } from './components/empleado-fomr/empleado-fomr.component';
import { ListaempleadosComponent } from './components/listaempleados/listaempleados.component';

import { EmpleadosserviceService } from './services/empleadosservice.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmpleadoFomrComponent,
    ListaempleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    EmpleadosserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
