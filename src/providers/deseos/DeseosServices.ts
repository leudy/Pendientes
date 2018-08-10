import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Lista } from "../../models/index";

@Injectable()
export class DeseosServices {
  listas: Lista[] = [];

  constructor(public http: HttpClient) {
    this.loadData();
  }

  AddNewList(NewItem: Lista) {
    this.listas.push(NewItem);
    this.saveData();
  }
  deleteList(list: Lista) {
    this.listas = this.listas.filter(c => c.id != list.id);
    this.saveData();
  }
  saveData() {
    localStorage.setItem("lista", JSON.stringify(this.listas));
    //use json.stringy
  }
  loadData() {
    var RESULT = localStorage.getItem("lista");
    if (RESULT != null) {
      this.listas = JSON.parse(RESULT);
    } else {
      this.listas = [];
    }

    //use json.parse
  }
}
