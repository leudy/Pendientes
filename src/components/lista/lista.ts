import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { Component, Input } from "@angular/core";
import { Lista } from "../../models";
import { AddListPage } from "../../pages/add-list/add-list";
import { DeseosServices } from "../../providers/deseos/DeseosServices";

/**
 * Generated class for the ListaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-lista",
  templateUrl: "lista.html"
})
export class ListaComponent {
  @Input()
  finish: boolean = false;

  /**
   *
   */
  constructor(
    public nav: NavController,
    public _sc: DeseosServices,
    public alert: AlertController
  ) {}
  text: string;

  DeleteList(lista: Lista) {
    this._sc.deleteList(lista);
  }
  Selected(lista: Lista) {
    this.nav.push(AddListPage, { titulo: lista.titulo, lista: lista });
  }
  editName(lista: Lista, slidingItem: ItemSliding) {
    slidingItem.close();
    const forms = this.alert.create({
      title: "Editar Nombre",
      message: "Editar el nombre de la lista",
      inputs: [
        {
          name: "Titulo",
          placeholder: "Nombre de la lista"
        }
      ],
      buttons: [
        { text: "Cancelar" },
        {
          text: "Guardar",
          handler: (form: any) => {
            if (form.Titulo.length === 0) return;
            lista.titulo = form.Titulo;
            this._sc.saveData();
          }
        }
      ]
    });
    forms.present();

  }
}
