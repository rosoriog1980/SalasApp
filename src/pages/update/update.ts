import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { SalasProvider } from '../../providers/salas/salas';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  sala: any = {};
  ubicaciones: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public salasService: SalasProvider,
    private alertCtrl: AlertController,
    public camera: Camera) {
      this.sala = this.navParams.get('sala');
  }

  takePicture()
  {
    const options: CameraOptions = {
    quality: 100,
    targetHeight: 400,
    targetWidth: 400,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }

  this.camera.getPicture(options).then((imageData) => {

    this.sala.imagen = `data:image/jpeg;base64,${imageData}`


    }, (err) => {
      console.log("Error: ", err);
    });
  }

  Cancelar(){
    this.navCtrl.pop();
  }

  PresentAlert(message){
    let alert = this.alertCtrl.create({
      title: 'Información',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  UpdateSala(){
    this.salasService.updateSala(this.sala)
    .then(data => {
      this.sala = data;
      this.navCtrl.pop();
    })
    .catch(err => {
      this.PresentAlert("Hubo un error, intenetelo nuevamente.");
    });
  }

  ionViewWillEnter(){
    this.ubicaciones = ['Piso 11 Norte (BOG)',
    'Piso 11 Sur (BOG)',
    'Piso 1 (MDE)',
    'Piso 2 (MDE)',
    'Piso 3 (MDE)',
    'Piso 4 (MDE)'];
  }

}
