import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EquiposPage } from '../equipos/equipos';

/**
 * Generated class for the GruposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
})
export class GruposPage {

  grupos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.grupos = [
      {
        'titulo':'Grupo A'
      },
      {
        'titulo':'Grupo B'
      },
      {
        'titulo':'Grupo C'
      },
      {
        'titulo':'Grupo D'
      },
      {
        'titulo':'Grupo E'
      },
      {
        'titulo':'Grupo F'
      },
      {
        'titulo':'Grupo G'
      },
      {
        'titulo':'Grupo H'
      },
    ]
  }

  openNavDetailsPage(grupo) {
    this.navCtrl.push(EquiposPage, { grupo: grupo });
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad GruposPage');
  }

}
