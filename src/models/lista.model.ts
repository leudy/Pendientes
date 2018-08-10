import { ListaItem } from "./lista-item.model";
export class Lista {
  id: Number;
  titulo: string;
  creadaEn: Date;
  terminadaEn: Date;
  terminada: boolean;
  Items: ListaItem[];

  constructor(titulo: string) {
    this.titulo = titulo;
    this.terminada = false;
    this.creadaEn = new Date();
    this.Items = [];
    this.id = new Date().getTime();
  }
}
