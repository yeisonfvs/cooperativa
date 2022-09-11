import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//rutas
import {AppRoutingModule} from './app-routing.module'
//servicios
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from  '@angular/forms';
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarDocumentosComponent } from './components/agregar-documentos/agregar-documentos.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { EditarDocumentoComponent } from './components/editar-documento/editar-documento.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthGuard } from './guards/auth.guard';
import { AuthPublicGuard } from './guards/authPublic.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocumentosComponent,
    ClientesComponent,
    AgregarDocumentosComponent,
    AgregarClienteComponent,
    EmpleadosComponent,
    AgregarEmpleadoComponent,
    FooterComponent,
    RegistroComponent,
    LoginComponent,
    EditarDocumentoComponent,
    EditarClienteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  exports:[
    MatTooltipModule,
  ],
  providers: [AuthGuard,AuthPublicGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
