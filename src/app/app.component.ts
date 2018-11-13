import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BuscarPage } from '../pages/buscar/buscar';
import { MatematicasPage } from '../pages/matematicas/matematicas';
import { TutorPage } from '../pages/tutor/tutor';
import { ChatPage } from '../pages/chat/chat';
import { ChatActivosPage } from '../pages/chat-activos/chat-activos';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { ChatTutorPage } from '../pages/chat-tutor/chat-tutor';


import { InicioPage } from '../pages/inicio/inicio';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = InicioPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToBuscar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BuscarPage);
  }goToMatematicas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MatematicasPage);
  }goToTutor(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TutorPage);
  }goToChat(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ChatPage);
  }goToChatActivos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ChatActivosPage);
  }goToOfertas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OfertasPage);
  }goToChatTutor(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ChatTutorPage);
  }
}
