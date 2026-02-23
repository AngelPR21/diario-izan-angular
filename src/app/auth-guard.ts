import {CanActivateFn, Router} from '@angular/router';
import {Auth} from './auth';
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  //primero inyectamos el servicio
  const authService = inject(Auth);
  //inyectamos tambien el router para poder navegar entre paginas
  const router = inject(Router)//es un objeto que existe que permite navegar entre objetos
  if(authService.isLoggedIn()){//para comprobar si puedo entrar a diario se ejecuta esto
    return true;
  }
  router.navigate(['iniciarSesion']); //esto ademas reenvia a la pagina de inicio sesion
  alert("Inicia sesion perrrrrrro")
  return false;

};
//la he puesto en canActivare para que no entrea  un sitio si no ha iniciado sesion
//la guarda comprobara si puede entrar o no
