import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Principal} from './principal/principal';
import {Diario} from './diario/diario';
import {IniciarSesion} from './iniciar-sesion/iniciar-sesion';
import {authGuard} from './auth-guard';

const routes: Routes = [
  {path: '', component: Principal},
  {path: 'diario', canActivate:[authGuard], component: Diario},//ponemos tipo de guarda canActivate y el nombre
  //can activate no te deja entrar en algo si no cumples una condicion
  {path:'iniciarSesion', component: IniciarSesion}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
