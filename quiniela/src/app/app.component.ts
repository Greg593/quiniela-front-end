import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { GruposPage } from '../pages/grupos/grupos';
//import { HistoriaPage } from '../pages/historia/historia';
import { GanadoresPage } from '../pages/ganadores/ganadores';

import { AuthProvider } from '../providers/auth/auth';
import { TablaPage } from '../pages/tabla/tabla';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = LoginPage;
  @ViewChild('content') nav: Nav;
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public authService: AuthProvider) {
    
    this.rootPage = LoginPage;
    this.pages = [
      { titulo: 'Inicio', component: HomePage, icon: 'home-outline' },
      { titulo: 'Quiniela', component: GruposPage, icon: 'bookmarks-outline' },
      { titulo: 'Historia', component: GanadoresPage, icon: 'document-outline' },
      { titulo: 'Acerca de', component: AboutPage, icon: 'information-circle-outline' },
      { titulo: 'Tabla de Posiciones', component: TablaPage, icon: 'information-circle-outline' }
      // {titulo: 'Cerrar Sesión', component: '',            icon: 'log-out'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page) {
    this.nav.setRoot(page);
  }

  logout() {
    this.authService.logout();
    this.nav.setRoot(LoginPage);
  }
}
