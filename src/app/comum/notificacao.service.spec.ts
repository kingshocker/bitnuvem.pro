import { TestBed } from '@angular/core/testing';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { NotificacaoService } from './notificacao.service';

describe('NotificacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalNotifications],
    });
  });

  it('should be created', () => {
    const service: NotificacaoService = TestBed.get(NotificacaoService);
    expect(service).toBeTruthy();
  });
});
