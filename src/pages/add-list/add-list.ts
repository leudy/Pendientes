import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DeseosServices } from "../../providers/deseos/DeseosServices";
import { Lista, ListaItem } from "../../models/index";

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
    if (this.navParams.get("lista")) {
      this.lista = this.navParams.get("lista");
    } else {
      if (nameOfList) {
        this.lista = new Lista(nameOfList);
      }
      this._sc.AddNewList(this.lista);
    }
  }
  AddNewItem() {
    if (this.NewItem.length === 0) return;
    var item = new ListaItem(this.NewItem);
    this.lista.Items.push(item);
    this._sc.saveData();
    this.NewItem = "";
  }
  UpdateItem(item: ListaItem) {
    // console.log(item.completado);
    item.completado = !item.completado;
    // console.log(item.completado);

    const completados = this.lista.Items.filter(i => i.completado == false)
      .length;
    if (completados === 0) {
      // console.log("terminados");

      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }
    this._sc.saveData();
  }
  DeleteItem(index: number) {
    this.lista.Items.splice(index, 1);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad AddListPage");
  }
}
