import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {
  grupo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.grupo = navParams.data.grupo;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }

}
