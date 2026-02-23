import { Component } from '@angular/core';
import {Credencial} from '../credencial';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: false,
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css',
})
export class IniciarSesion {

  constructor(private credenciales : Credencial){}
  //pillamos el service para comprobar que los datos que pasamos por iniciar sesion son correctos

  iniciarSesion(usuario : string, contrasenya: string) {
    if(usuario === this.credenciales.obtenerUsuario() && contrasenya === this.credenciales.obtenerContrasenya()){
      //aqui llamamos al service para hacer la comprobacion, nos devolvera con sus metodos izan y 123
      alert("Has iniciado sesion")
      localStorage.setItem("sesion","1");
    }else{
      alert("Contraseña o usuario incorrecto")
    }
  }
}
