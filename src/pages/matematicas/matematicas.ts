import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorPage } from '../tutor/tutor';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-matematicas',
  templateUrl: 'matematicas.html'
})
export class MatematicasPage {

  constructor(public navCtrl: NavController) {
  }
  goToTutor(params){
    if (!params) params = {};
    this.navCtrl.push(TutorPage);
  }goToChat(params){
    if (!params) params = {};
    this.navCtrl.push(ChatPage);
  }
}
