import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the CrearTemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-tema',
  templateUrl: 'crear-tema.html'
})
export class CrearTemaPage {
  subjects: any;
  selected: any;
  nombre: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider
  ) {
    this.getSubjects();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearTemaPage');
  }
  getSubjects() {
    this.restProvider.getSubjects().then(data => {
      this.subjects = data;
      console.log(this.subjects);
    });
  }
  crearTema(params){
    console.log(this.selected)
    var tema = {id: this.selected,name:this.nombre}
    this.restProvider.crearTema(tema).then(data => {
      console.log(data)
      this.goToBuscar(params);
    });
  }
  goToBuscar(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(BuscarPage);
  }
}
