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
import { SignupPage } from '../pages/signup/signup';
import { TablaPage } from '../pages/tabla/tabla';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { GruposProvider } from '../providers/grupos/grupos';
import { GanadoresProvider } from '../providers/ganadores/ganadores';
import { AuthProvider } from '../providers/auth/auth';
import { TablaProvider } from '../providers/tabla/tabla';


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
    LoginPage,
    SignupPage,
    TablaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot()
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
    LoginPage,
    SignupPage,
    TablaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GruposProvider,
    GanadoresProvider,
    AuthProvider,
    TablaProvider,
  ]
})
export class AppModule {}
