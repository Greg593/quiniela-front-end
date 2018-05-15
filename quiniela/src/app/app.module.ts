import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { HistoriaPage } from '../pages/historia/historia';
import { GanadoresPage } from '../pages/ganadores/ganadores';
import { GoleadoresPage } from '../pages/goleadores/goleadores';
import { EquiposPage } from '../pages/equipos/equipos';
import { PrincipalPage } from '../pages/principal/principal';
import { GruposPage } from '../pages/grupos/grupos';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GruposProvider } from '../providers/grupos/grupos';
import { GanadoresProvider } from '../providers/ganadores/ganadores';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HistoriaPage,
    GoleadoresPage,
    GanadoresPage,
    EquiposPage,
    PrincipalPage,
    GruposPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HistoriaPage,
    GanadoresPage,
    GoleadoresPage,
    EquiposPage,
    PrincipalPage,
    GruposPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GruposProvider,
    GanadoresProvider,
  ]
})
export class AppModule {}
