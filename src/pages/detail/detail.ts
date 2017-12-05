import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { SalasProvider } from '../../providers/salas/salas';
import { HomePage } from '../home/home';
import { UpdatePage } from '../update/update';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailsPage {
  sala: any = {};
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public salasService: SalasProvider) {
      this.sala = this.navParams.get('sala');
  }

  Cancel(){
    this.navCtrl.pop();
  }

  OcuparSala(){
    this.sala.ocupada = !this.sala.ocupada;
    this.salasService.updateSala(this.sala)
    .then(data => {
      this.sala = data;
    });
  }

  UpdateSala(){
    this.navCtrl.push(UpdatePage, { sala: this.sala })
  }

  DeleteSala(){
    let confirm = this.alertCtrl.create({
      title: 'Atención!!',
      message: `¿Esta seguro de borrar la sala ${this.sala.nombre} ?`,
      buttons: [
        {
          text: 'Aceptar',
          handler: ()=> {
            this.salasService.deleteSala(this.sala._id)
            .then(data => {
              this.navCtrl.setRoot(HomePage);
            });
          }
        },
        {
          text: 'Cancelar'
        }
      ]
    });
    confirm.present();
  }

  ionViewWillEnter(){

  }

}
