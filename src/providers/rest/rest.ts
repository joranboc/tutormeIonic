import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  //apiUrl = 'https://tutorme-api.herokuapp.com/';
  apiUrl = 'http://localhost:3000/';
  token:any;
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users').subscribe(
        data => {
          resolve(data);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/users', "email=test&password=123456").subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }
  login(data) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + 'auth/login', data)
        .subscribe(
          res => {
            this.token = res;
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
