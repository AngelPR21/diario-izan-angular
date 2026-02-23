import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Principal } from './principal/principal';
import { Diario } from './diario/diario';
import {Pagina} from './pagina/pagina';
import { IniciarSesion } from './iniciar-sesion/iniciar-sesion';
import { Credencial } from "./credencial";

@NgModule({
  declarations: [
    App,
    Principal,
    Diario,
    Pagina,
    IniciarSesion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
