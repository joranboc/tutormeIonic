import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatActivosPage } from '../../pages/chat-activos/chat-activos';
import { AngularFireDatabase } from '@angular/fire/database';
import { Message, Room } from '../../app/app.model';


/*
  Generated class for the FireBaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireBaseProvider {
chats: Message[] = [];
rooms: Room;
  constructor(public http: HttpClient, public afDB: AngularFireDatabase) {
    
    console.log('Hello FireBaseProvider Provider');
    //this.room();
    console.log(this.afDB.list("chats").snapshotChanges().subscribe(a => console.log(a)));
  }
  sendMessage(){
    //this.chats.push({message: "Hola",sender:"1",roomId:"2"});
    //this.rooms = {userId: "1",tutorId:"1",messages: this.chats};
    
  }
  room(){
    //this.chats.push({message:"hola",sender: "1",roomId:"2"});
    this.rooms = {userId: "1",tutorId:"1"};
    this.afDB.list('chats').push(this.rooms);
    //console.log(this.afDB.list("chats"));
  }


}
