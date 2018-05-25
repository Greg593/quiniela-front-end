import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider} from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  email: string;
  password: string;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount(){

    this.showLoader();

    let credentials = {
        email: this.email,
        password: this.password
    };

    this.authService.createAccount(credentials).then((result) => {
        this.loading.dismiss();
        console.log(result);
        this.navCtrl.setRoot(HomePage);
    }, (err) => {
        this.loading.dismiss();
        console.log(err);
    });

}

showLoader(){

    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
    });
    this.loading.present();

}

}
