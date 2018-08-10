import { Component } from "@angular/core";
import { NavController, NavParams, Item } from "ionic-angular";
import { DeseosServices } from "../../providers/deseos/deseos";
import { Lista } from "../../models/lista.model";
import { ListaItem } from "../../models/lista-item.model";

/**
 * Generated class for the AddListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-add-list",
  templateUrl: "add-list.html"
})
export class AddListPage {
  //properties
  lista: Lista;
  NewItem: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _sc: DeseosServices
  ) {
    const nameOfList = this.navParams.get("titulo");
    if (nameOfList) {
      this.lista = new Lista(nameOfList);
    }
  }
  AddNewItem() {
    if (this.NewItem.length === 0) return;
    var item = new ListaItem(this.NewItem);
    this.lista.Items.push(item);
    this.NewItem = "";
  }
  UpdateItem(item: ListaItem) {
    item.completado = !item.completado;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddListPage");
  }
}
