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
  token:any;
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getUsers(id) {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + '/students/' + id, {
          headers: new HttpHeaders().set(
            'Authorization',
            'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1NDIxNjM4NzB9.ODSj-Gsta_2qrjyhRjDTzjnZBWwlsRXPveFWoeqMSgg'
          )
        })
        .subscribe(data => {
          console.log(data);
            resolve(data);
          }, err => {
            console.log(err);
          });
    });
  }
  getUser(data) {
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
