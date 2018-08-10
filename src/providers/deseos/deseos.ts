import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Lista } from "../../models/index";

@Injectable()
export class DeseosServices {
  listas: Lista[] = [];

  constructor(public http: HttpClient) {
    const lista1 = new Lista("Crear app lot");
    var lista2 = new Lista("Buscar a batman");
    this.listas.push(lista1, lista2);
    console.log(this.listas);
    console.log("Hello DeseosProvider Provider");
  }
}
