import { Component } from "@angular/core";

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from "../home/home";
import { PendientesPage } from "../pendientes/pendientes";
import { TerminadosPage } from "../terminados/terminados";
@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = PendientesPage;
  tab3Root = TerminadosPage;

  constructor() {}
}
