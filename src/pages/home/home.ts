import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DespesaProvider } from '../../providers/despesa/despesa';
import { Despesa } from '../../models/despesa';
import { AddPage } from '../add/add';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  despesas: Despesa[] = new Array();
  constructor(public navCtrl: NavController, private desProv: DespesaProvider) {
    this.despesas = desProv.getAll();
    
  }
  add() {
    this.navCtrl.push(AddPage);
  }

  del(id: number) {
    this.desProv.delete(id);
  }

 

}
