import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './components/documentos/documentos.component'
import { AgregarDocumentosComponent} from './components/agregar-documentos/agregar-documentos.component'
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
const routes: Routes = [
  {
    path: '',
    component: DocumentosComponent
  },
  {
    path: 'documentos',
    component: DocumentosComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'clientes/agregar',
    component: AgregarClienteComponent
  },
  {
    path: 'empleados/agregar',
    component: AgregarEmpleadoComponent
  },
  {
    path: 'documentos/agregar',
    component: AgregarDocumentosComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }