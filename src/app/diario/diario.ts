import { Component } from '@angular/core';

@Component({
  selector: 'app-diario',
  standalone: false,
  templateUrl: './diario.html',
  styleUrl: './diario.css',
})
export class Diario {
  entradas = [ //en las clases nunca se escribe let
    {//estos serian objetos sin clases, mas adelante seran PaginaDiario,funciona parecido a un json
      fecha: "18 de febrero",
      mood: "Bueno",
      texto:"Hoy he disfrutado en clase"
    },
    {
      fecha: "19 de febrero",
      mood:"Malo",
      texto:"Hoy he disfrutado en coche"
    },
    {
      fecha: "20 de febrero",
      mood:"Excelente",
      texto:"Hoy he repasado en clase"
    },
    {
      fecha: "21 de febrero",
      mood:"Bueno",
      texto:"Hoy he repasado en clase"
    },
    {
      fecha: "22 de febrero",
      mood:"Excelente",
      texto:"Hoy he repasado en clase"
    },
    {
      fecha: "23 de febrero",
      mood:"Bueno",
      texto:"Hoy he repasado en clase"
    },
  ]
  estadoDiario: boolean;
  abrirCerrarDiario(){
    this.estadoDiario = !this.estadoDiario;
  }
}
