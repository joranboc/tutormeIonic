import { RestProvider } from './../../providers/rest/rest';
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
  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider
  ) {}

  nombre: string = '';
  apellido: string = '';
  fechaNacimiento: string = '';
  profesion: string = '';
  correo: string = '';
  tipo: boolean;
  password: string = '';
  registroEstudiante() {
    let data = { name: this.nombre + " " + this.apellido, carreer: this.profesion, email: this.correo, password: this.password };
    return new Promise((resolve, reject) => {
      this.restProvider
        .registrarEstudiante(data)
        .then(data => {
          console.log(data);
          resolve();
        })
        .catch(a => console.log('401'));
    })
  }
  registroTutor() {
    let data = { name: this.nombre + " " + this.apellido, carreer: this.profesion, email: this.correo, password: this.password };
    return new Promise((resolve, reject) => {
      this.restProvider
        .registrarTutor(data)
        .then(data => {
          console.log(data);
          resolve();
        })
        .catch(a => console.log('401'));
    })
  }
  goToInicio(params) {
    if(this.tipo){
    this.registroTutor().then(a => {
      if (!params) params = {};
      this.navCtrl.push(InicioPage);
    });}
    else{
      this.registroEstudiante().then(a => {
        if (!params) params = {};
        this.navCtrl.push(InicioPage);
      });
    }

  }
  goToRegistro(params) {

    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }
  goToBuscar(params) {
    if (!params) params = {};
    this.navCtrl.push(BuscarPage);
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
