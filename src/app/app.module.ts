import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';

import { NewSalaPage } from '../pages/new/newSala';
import { DetailsPage } from '../pages/detail/detail';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UpdatePage } from '../pages/update/update';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SalasProvider } from '../providers/salas/salas';

@NgModule({
  declarations: [
    MyApp,
    NewSalaPage,
    DetailsPage,
    HomePage,
    TabsPage,
    UpdatePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewSalaPage,
    DetailsPage,
    HomePage,
    TabsPage,
    UpdatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SalasProvider,
    Camera
  ]
})
export class AppModule {}
