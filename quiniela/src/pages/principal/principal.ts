import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GruposPage } from '../grupos/grupos';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController) {

  }

  quiniela(){
    this.navCtrl.push(GruposPage);
  }

}
