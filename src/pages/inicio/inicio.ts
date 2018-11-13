import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { BuscarPage } from '../buscar/buscar';
import { MatematicasPage } from '../matematicas/matematicas';
import { TutorPage } from '../tutor/tutor';
import { ChatPage } from '../chat/chat';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  users: any;
  correo: string = '';
  password: string = '';

  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider
  ) { }
  getUsers() {
    this.restProvider.getUsers(2).then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  login() {
    let data = { email: this.correo, password: this.password };
    return new Promise((resolve,reject) =>{ this.restProvider.login(data).then(data => {
      this.users = data;
      console.log(this.users);
      resolve();
    }).catch(a => console.log("401")); })
  }
  goToRegistro(params) {
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }
  goToInicio(params) {

    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }
  goToBuscar(params) {
    this.login().then(a => {
    this.getUsers();
    if (!params) params = {};
    this.navCtrl.setRoot(BuscarPage);}
    )
  }
  goToMatematicas(params) {
    if (!params) params = {};
    this.navCtrl.push(MatematicasPage);
  }
  goToTutor(params) {
    if (!params) params = {};
    this.navCtrl.push(TutorPage);
  }
  goToChat(params) {
    if (!params) params = {};
    this.navCtrl.push(ChatPage);
  }
}

