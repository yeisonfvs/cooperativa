import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './components/documentos/documentos.component'
import { AgregarDocumentosComponent} from './components/agregar-documentos/agregar-documentos.component'
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { EditarDocumentoComponent } from './components/editar-documento/editar-documento.component';



// Guards
import { AuthGuard } from './guards/auth.guard';
import { AuthPublicGuard } from './guards/authPublic.guard';

const routes: Routes = [
  {
    path: 'documentos',
    canActivate: [AuthGuard],
    component: DocumentosComponent
  },
  {
    path: 'documentos/editar/:id',
    component: EditarDocumentoComponent
  },
  {
    path: 'documentos/agregar',
    component: AgregarDocumentosComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'clientes/agregar',
    component: AgregarClienteComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'empleados/agregar',
    component: AgregarEmpleadoComponent
  },
  {
    path: 'registro',
    //canActivate: [AuthGuard],
    component: RegistroComponent
    
  },
  {
    path: 'login',
    canActivate: [AuthPublicGuard],
    component: LoginComponent    
  }, 
  { 
    path: '**', 
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }