import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the SalasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SalasProvider {
  baseUrl: String = "https://salas-back.herokuapp.com/";

  constructor(public http: Http) {

  }

  getSalas(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}api/salas`)
      .subscribe(res => resolve(res.json()));
    });
  }

  newSala(sala){
    return new Promise(resolve => {
      const body = {sala};
      this.http.post(`${this.baseUrl}api/salas`, body)
      .subscribe(res => resolve(res.json()));
    });
  }

  deleteSala(id){
    return new Promise(resolve => {
      this.http.delete(`${this.baseUrl}api/salas?id=${id}`)
      .subscribe(res => resolve(res.json()));
    });
  }

  updateSala(sala){
    return new Promise(resolve => {
      const body = {sala};
      this.http.put(`${this.baseUrl}api/salas`, body)
      .subscribe(res => resolve(res.json()));
    });
  }

}
