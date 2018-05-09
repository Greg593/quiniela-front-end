import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GanadoresProvider } from '../../providers/ganadores/ganadores';

@IonicPage()
@Component({
  selector: 'page-ganadores',
  templateUrl: 'ganadores.html',
})
export class GanadoresPage {

  ganadores: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ganadoresService: GanadoresProvider) {
  }

  ionViewDidLoad() {
    this.ganadoresService.getGanadores().then((data) =>{
      console.log(data);
      this.ganadores = data;
    });
  }

}
