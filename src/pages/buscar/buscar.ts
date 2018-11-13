import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatematicasPage } from '../matematicas/matematicas';
import { TutorPage } from '../tutor/tutor';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})
export class BuscarPage {

  constructor(public navCtrl: NavController) {
  }
  goToMatematicas(params){
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
