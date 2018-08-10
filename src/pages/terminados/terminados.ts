import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DeseosServices } from "../../providers/deseos/deseos";

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
  constructor(public _sc: DeseosServices) {}
  Selected(item: any) {}
  ionViewDidLoad() {
    console.log("ionViewDidLoad TerminadosPage");
  }
}
