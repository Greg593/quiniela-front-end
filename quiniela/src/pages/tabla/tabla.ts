import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TablaProvider } from '../../providers/tabla/tabla';

@IonicPage()
@Component({
  selector: 'page-tabla',
  templateUrl: 'tabla.html',
})
export class TablaPage {

  tablasA: any;
  tablasB: any;
  tablasC: any;
  tablasD: any;
  tablasE: any;
  tablasF: any;
  tablasG: any;
  tablasH: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tablaService: TablaProvider) {
  }

  ionViewDidLoad() {
    this.tablaService.getTablaA().then((data) => {
      console.log(data);
      this.tablasA = data;
    });

    this.tablaService.getTablaB().then((data) => {
      console.log(data);
      this.tablasB = data;
    });

    this.tablaService.getTablaC().then((data) => {
      console.log(data);
      this.tablasC = data;
    });

    this.tablaService.getTablaD().then((data) => {
      console.log(data);
      this.tablasD = data;
    });

    this.tablaService.getTablaE().then((data) => {
      console.log(data);
      this.tablasE = data;
    });

    this.tablaService.getTablaF().then((data) => {
      console.log(data);
      this.tablasF = data;
    });

    this.tablaService.getTablaG().then((data) => {
      console.log(data);
      this.tablasG = data;
    });

    this.tablaService.getTablaH().then((data) => {
      console.log(data);
      this.tablasH = data;
    });
  }

}
