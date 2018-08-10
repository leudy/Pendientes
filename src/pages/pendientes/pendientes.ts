import { Component } from "@angular/core";
import { DeseosServices } from "../../providers/deseos/deseos";
import { Lista } from "../../models/index";
import { NavController, AlertController } from "ionic-angular";
import { AddListPage } from "../add-list/add-list";

/**
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-pendientes",
  templateUrl: "pendientes.html"
})
export class PendientesPage {
  constructor(
    public _sc: DeseosServices,
    public nav: NavController,
    public alert: AlertController
  ) {}

  Selected(lista: Lista) {
    console.log("esta es la lista selecionada ", lista);
  }
  addNew() {
    //this.nav.push(AddListPage);
    const forms = this.alert.create({
      title: "Nueva lista",
      message: "Nombre de la lista que desea",
      inputs: [
        {
          name: "Titulo",
          placeholder: "Nombre de la lista"
        }
      ],
      buttons: [
        { text: "Cancelar" },
        {
          text: "Agregar",
          handler: (form: any) => {
            if (form.Titulo.length === 0) return;
            this.nav.push(AddListPage, { titulo: form.Titulo });
          }
        }
      ]
    });
    forms.present();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad PendientesPage");
  }
}
