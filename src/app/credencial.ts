import { Injectable } from '@angular/core';

//servicio, lo usaremos como "backend"

@Injectable({
  providedIn: 'root',
})
export class Credencial {
  obtenerUsuario(){
    return "izan"
  }
  obtenerContrasenya(){
    return "123"
  }
}
