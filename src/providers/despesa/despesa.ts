//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despesa } from '../../models/despesa';
import { LocalStorageService } from 'angular-2-local-storage';

/*
Generated class for the DespesaProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class DespesaProvider {
  private despesas: Despesa[] = new Array();
  
  // constructor(public http: HttpClient) {
  constructor(private localStorageService: LocalStorageService) {
    console.log('Hello DespesaProvider Provider');
  }
  getAll(): Despesa[] {
    this.getDb();
    return this.despesas;
  }
  private getDb(): void {
    this.despesas = [];
    if (this.localStorageService.get("despesas") != null)
    {
        this.despesas = <Despesa[]> JSON.parse(<string>this.localStorageService.get("despesas"));
    }
  }
  
  save(despesa: Despesa): void {
    this.getDb();
    this.despesas.push(despesa);
    this.localStorageService.set("despesas", JSON.stringify(this.despesas));
  }
  
  delete(despesaId: number): void {
    for (var i=0; i < this.despesas.length; i++)
    {
      if (this.despesas[i].id == despesaId)
      {
        this.despesas.splice(i, 1);
      }
    }
    this.localStorageService.set("despesas", JSON.stringify(this.despesas));
  }


  
}
