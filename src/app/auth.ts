import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  isLoggedIn(){
    return localStorage.getItem("sesion") === "1";
  }
}
//va a ir a localstorage comprueba si he inciaido sesion y devuelve true
