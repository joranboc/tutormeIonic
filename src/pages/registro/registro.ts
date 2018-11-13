import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { BuscarPage } from '../buscar/buscar';
import { MatematicasPage } from '../matematicas/matematicas';
import { TutorPage } from '../tutor/tutor';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {

  constructor(public navCtrl: NavController) {
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToRegistro(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }goToBuscar(params){
    if (!params) params = {};
    this.navCtrl.push(BuscarPage);
  }goToMatematicas(params){
    if (!params) params = {};
    this.navCtrl.push(MatematicasPage);
  }goToTutor(params){
    if (!params) params = {};
    this.navCtrl.push(TutorPage);
  }goToChat(params){
    if (!params) params = {};
    this.navCtrl.push(ChatPage);
  }
}
