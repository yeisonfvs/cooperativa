import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentosComponent } from './components/documentos/documentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
