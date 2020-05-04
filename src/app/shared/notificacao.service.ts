import { Injectable } from '@angular/core';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  notificacao: Notification;

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
    } else if (
      (typeof Notification !== typeof undefined)
      && (Notification.permission === 'granted')
    ) {
      const opcoes = {
        body: texto
      };
      this.notificacao = new Notification(titulo, opcoes);
    }
  }

  requisitarPermissaoNotificar(): Promise<boolean> {
    if (
      (typeof Notification !== typeof undefined)
      && (!this.platform.is('cordova'))
      && (!this.platform.is('capacitor'))
    ) {
      return new Promise((resolve) => {
        Notification.requestPermission((permissao: string) => {
          if (permissao === 'granted') {
            resolve(true);
          } else {
            resolve(false);
          }
        }).then((permissao: string) => {
          if (permissao === 'granted') {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    }
    return new Promise((resolve) => resolve(true));
  }
}
