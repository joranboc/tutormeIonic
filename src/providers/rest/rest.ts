import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://tutorme-api.herokuapp.com/';
  //apiUrl = 'http://localhost:3000/';
  //token:any;

  constructor(public http: HttpClient) {
  }

  registrarEstudiante(data) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + 'students', data)
        .subscribe(
          res => {
            this.guardarToken(res);
            resolve(res);
          },
          err => {
            console.log(err);
          }
        );
    });
  }

  getUsers() {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + 'students', {
          headers: new HttpHeaders().set('Authorization', this.obtenerToken())
        })
        .subscribe(data => {
            console.log(data);
            resolve(data);
          }, err => {
            console.log(err);
          });
    });
  }
  registrarTutor(data){
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + 'tutors', data)
        .subscribe(
          res => {
            this.guardarToken(res);
            resolve(res);
          },
          err => {
            console.log(err);
          }
        );
    });
  }

  getSubjects() {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + 'subjects', {
          headers: new HttpHeaders().set('Authorization', this.obtenerToken())
        })
        .subscribe(data => {
            console.log(data);
            resolve(data);
          }, err => {
            console.log(err);
          });
    });
  }
  getTopics(id){
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + 'topics/'+id, {
          headers: new HttpHeaders().set('Authorization', this.obtenerToken())
        })
        .subscribe(data => {
            console.log(data);
            resolve(data);
          }, err => {
            console.log(err);
          });
    });
  }
  crearTema(data) {
    var idSubject = data.id;
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + 'subjects/' + idSubject + "/topics", data, {
          headers: new HttpHeaders().set('Authorization', this.obtenerToken())
        })
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            console.log(err);
          }
        );
    });
  }
  getTutores(id){
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + 'topics/tutors/'+id, {
          headers: new HttpHeaders().set('Authorization', this.obtenerToken())
        })
        .subscribe(data => {
            console.log(data);
            resolve(data);
          }, err => {
            console.log(err);
          });
    });
  }
  /* getUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/students', JSON.stringify(data), {
        headers: new HttpHeaders().set('Authorization', 'my-token-de-autoriazación'),
        params: new HttpParams().set('id', '3'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
 */  login(data) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + 'auth/login', data)
        .subscribe(
          res => {
            this.guardarToken(res);
            resolve(res);
          },
          err => {
            console.log(err);
          }
        );
    });
  }


  guardarToken(token){
    localStorage.setItem("token", token.auth_token);
  }
  obtenerToken(){
    return localStorage.getItem("token")
  }

  cerrarSesion(){
    localStorage.clear();
  }
}
