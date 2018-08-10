import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
// my custome pages

import { PendientesPage } from "../pages/pendientes/pendientes";
import { TerminadosPage } from "../pages/terminados/terminados";
import { DeseosServices } from "../providers/deseos/deseos";

//injecting modules
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { AddListPage } from "../pages/add-list/add-list";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TerminadosPage,
    PendientesPage,
    AddListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TerminadosPage,
    PendientesPage,
    AddListPage
  ],
  providers: [
    StatusBar,
    DeseosServices,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
