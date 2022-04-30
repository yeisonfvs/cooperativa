import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './components/documentos/documentos.component'

const routes: Routes = [
  {
    path: '',
    component: DocumentosComponent,
    children: [
      {
        path: 'documentos',
        component: DocumentosComponent
      },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }