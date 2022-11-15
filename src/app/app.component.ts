import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private dataService: DataService ) {}

  ngOnInit(){
    this.componentes = this.dataService.getMenuOpt();
  }


}



