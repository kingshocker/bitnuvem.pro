import { Injectable } from '@angular/core';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private localNotifications: LocalNotifications,
    private platform: Platform,
  ) {}

  notificar(titulo: string, texto: string) {
    if (this.platform.is('cordova') || this.platform.is('capacitor')) {
      this.localNotifications.schedule([{
       title: titulo,
       text: texto,
      }]);
      console.log('Que viage é essa');
    } else if (
      (typeof Notification !== typeof undefined)
      && (Notification.permission === 'granted')
    ) {
      const opcoes = {
        body: texto
      };
      const notificacao = new Notification(titulo, opcoes);
    }
  }
}
