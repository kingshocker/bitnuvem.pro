import { TestBed } from '@angular/core/testing';

import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import {
  OportunidadesArbitragemService
} from './oportunidades-arbitragem.service';

describe('OportunidadesArbitragemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Storage,
          useFactory: () => new Storage({})
        },
        LocalNotifications,
        BackgroundMode,
      ],
    });
  });

  it('should be created', () => {
    const service: OportunidadesArbitragemService = TestBed.get(
      OportunidadesArbitragemService
    );
    expect(service).toBeTruthy();
  });
});
