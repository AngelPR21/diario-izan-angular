export class paginaDiario{
    fecha:string;
    texto:string;
  mood:string
    constructor(fecha: string, texto:string, mood: string){
      this.fecha = fecha;
      this.texto = texto;
      this.mood = mood;
    }
}
