import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatematicasPage } from '../matematicas/matematicas';
import { TutorPage } from '../tutor/tutor';
import { ChatPage } from '../chat/chat';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})
export class BuscarPage {
  subjects:any;
  topics:any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getSubjects();
    
  }
  getTopics(id){
    this.restProvider.getTopics(id).then(data => {
      this.topics = data;
    });
  }
  goToMatematicas(id,name){
    id = id
    name = name
    this.navCtrl.push(MatematicasPage,{data: id,name: name});
  }
  goToTutor(params){
    if (!params) params = {};
    this.navCtrl.push(TutorPage);
  }goToChat(params){
    if (!params) params = {};
    this.navCtrl.push(ChatPage);
  }
  getSubjects() {
    this.restProvider.getSubjects().then(data => {
      this.subjects = data;
    });
  }

}
