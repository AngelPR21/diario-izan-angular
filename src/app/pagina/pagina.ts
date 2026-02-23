import {Component, Input} from '@angular/core';
import {paginaDiario} from '../paginaDiario';

@Component({
  selector: 'app-pagina',
  standalone: false,
  templateUrl: './pagina.html',
  styleUrl: './pagina.css',
})
export class Pagina {
@Input() entrada: paginaDiario; //el objeto que hemos creado por separado, obtenemnos variable entrada de tipo paginaDiario

    devolverClase(){
      return this.entrada.mood.toLowerCase();
    }
}
