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
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getSubjects();
  }
  
  goToMatematicas(params){
    if (!params) params = {};
    this.navCtrl.push(MatematicasPage);
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
