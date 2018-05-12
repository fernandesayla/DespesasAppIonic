import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Despesa } from '../../models/despesa';
import { DespesaProvider }  from '../../providers/despesa/despesa';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  despesa: Despesa;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.despesa = new Despesa(new Date().getTime(), "", "", new Date(), 0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
