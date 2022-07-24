import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarDocumentosComponent } from './components/agregar-documentos/agregar-documentos.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocumentosComponent,
    ClientesComponent,
    AgregarDocumentosComponent,
    AgregarClienteComponent,
    EmpleadosComponent,
    AgregarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
