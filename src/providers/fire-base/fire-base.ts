import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatActivosPage } from '../../pages/chat-activos/chat-activos';
import { AngularFireDatabase } from '@angular/fire/database';


/*
  Generated class for the FireBaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireBaseProvider {
chat:any;
  constructor(public http: HttpClient, afDB: AngularFireDatabase) {
    console.log('Hello FireBaseProvider Provider');
    afDB.list('chats').push("prueba");
    console.log(afDB.list("chats"));
  }

}
