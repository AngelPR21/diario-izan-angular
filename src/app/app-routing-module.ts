import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Principal} from './principal/principal';
import {Diario} from './diario/diario';

const routes: Routes = [
  {path: '', component: Principal},
  {path: 'diario', component: Diario},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
