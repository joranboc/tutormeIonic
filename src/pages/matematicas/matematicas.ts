import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TutorPage } from '../tutor/tutor';
import { ChatPage } from '../chat/chat';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-matematicas',
  templateUrl: 'matematicas.html'
})
export class MatematicasPage {
  tutores:any;
  topicName:any;
  constructor(public navCtrl: NavController,public restProvider: RestProvider,public navParams: NavParams) {
    console.log(navParams.get('data'));
    this.tutores = this.getTutores(navParams.get('data'));
    
    this.topicName = navParams.get('name');
  }
  goToTutor(params){
    if (!params) params = {};
    this.navCtrl.push(TutorPage);
  }goToChat(params){
    if (!params) params = {};
    this.navCtrl.push(ChatPage);
  }
  getTutores(id){
    this.restProvider.getTutores(id).then(data => {
      this.tutores = data;
      this.tutores = this.tutores.tutors;
    });
  }
}
