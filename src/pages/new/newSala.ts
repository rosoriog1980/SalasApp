import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SalasProvider } from '../../providers/salas/salas'
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-newSala',
  templateUrl: 'newSala.html'
})
export class NewSalaPage {
  newSala: any = {};

  ubicaciones: any[];

  constructor(public navCtrl: NavController,
    public salasService: SalasProvider,
    private alertCtrl: AlertController,
    public camera: Camera) {

  }

  takePicture()
  {
    const options: CameraOptions = {
    quality: 100,
    targetHeight: 400,
    targetWidth: 400,
    destinationType: this.camera.DestinationType.NATIVE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }

  this.camera.getPicture(options).then((imageData) => {

    this.newSala.imagen = imageData


    }, (err) => {
      console.log("Error: ", err);
    });
  }


  Cancelar(){
    this.navCtrl.setRoot(HomePage);
  }

  SaveSala(){
    if (this.newSala.nombre != "" && this.newSala.ubicacion != "") {
      this.salasService.newSala(this.newSala)
      .then(data => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch(err =>{
        this.PresentAlert("Hubo un error, intenetelo nuevamente.");
      });
    } else {
      this.PresentAlert("Hay campos obligatorios sin diligenciar!");
    }
  }

  PresentAlert(message){
    let alert = this.alertCtrl.create({
      title: 'Información',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewWillEnter(){
    this.newSala = {
      imagen: "",
      nombre: "",
      numeroAsientos: 0,
      ubicacion: "",
      ultimaLimpieza: "",
      ocupada: false
    }

    this.ubicaciones = ['Piso 11 Norte', 'Piso 11 Sur'];
  }
}
