import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalasProvider } from '../../providers/salas/salas'
import { DetailsPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  salasList: any = [];
  constructor(
    public navCtrl: NavController,
    public salasService: SalasProvider) {
  }

  CargarSalas(){
    this.salasService.getSalas()
    .then(data => {
      this.salasList = data;
    });
  }

  details(sala){
    this.navCtrl.push(DetailsPage, {
      sala: sala
    });
  }

  ionViewWillEnter(){
    this.CargarSalas();
  }
}
