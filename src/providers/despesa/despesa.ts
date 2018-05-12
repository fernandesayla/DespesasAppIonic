//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despesa } from '../../models/despesa';
/*
Generated class for the DespesaProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class DespesaProvider {
  private despesas: Despesa[] = new Array();
  
  // constructor(public http: HttpClient) {
  constructor() {
    console.log('Hello DespesaProvider Provider');
  }
  getAll(): Despesa[] {
    this.despesas = [new Despesa(1, "Mercado", "Extra", new Date("2016-10-01T03:00:00-03:00"), 200.5),
    new Despesa(2, "Lazer", "Cinemark", new Date("2016-10-20T03:00:00-03:00"), 59.9)];
    return this.despesas;
  }
  
}
