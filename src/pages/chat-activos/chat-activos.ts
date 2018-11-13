import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-chat-activos',
  templateUrl: 'chat-activos.html'
})
export class ChatActivosPage {

  constructor(public navCtrl: NavController) {
  }
  goToChat(params){
    if (!params) params = {};
    this.navCtrl.push(ChatPage);
  }
}
