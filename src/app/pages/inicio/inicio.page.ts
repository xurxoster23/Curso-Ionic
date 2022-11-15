import { Component, OnInit } from '@angular/core';
// Creamos una Interfaz dónde especificamos el tipo de datos de la lista
interface Componente {
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  // Definimos el listado
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/cards'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirectTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite',
      redirectTo: '/infinite'
    },
    {
      icon: 'albums-outline',
      name: 'Inputs',
      redirectTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'List - Reorder',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Loading',
      redirectTo: '/loading'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
