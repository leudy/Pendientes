import { Component } from "@angular/core";
import { DeseosServices } from "../../providers/deseos/DeseosServices";
import { Lista } from "../../models/index";
import { NavController } from "ionic-angular";
import { AddListPage } from "../add-list/add-list";
/**
 * Generated class for the TerminadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-terminados",
  templateUrl: "terminados.html"
})
export class TerminadosPage {
  constructor(public _sc: DeseosServices, public nav: NavController) {}
  Selected(lista: Lista) {
    this.nav.push(AddListPage, { titulo: lista.titulo, lista: lista });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad TerminadosPage");
  }
}
