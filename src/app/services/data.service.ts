import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from 'src/app/interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCtrl: HttpClient) { }

  getUsuarios(){
    return this.httpCtrl.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpt(){
    return this.httpCtrl.get<Componente[]>('/assets/data/menu-opts.json');
  }
}
