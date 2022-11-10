import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {


  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  // Método Alerta Simple
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  // Método con Varios Botones
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        // Botones como Objetos
        {
          text: 'Ok',
          handler: () => {
            console.log('Click Ok!');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }
  // Alerta con Inputs
  async presentAlertInput() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ],
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'name2',
          type: 'text',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'name3',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'name4',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}
