import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-tutor',
  templateUrl: 'tutor.html'
})
export class TutorPage {

  constructor(public navCtrl: NavController) {
  }
  goToChat(params){
    if (!params) params = {};
    this.navCtrl.push(ChatPage);
  }
}
