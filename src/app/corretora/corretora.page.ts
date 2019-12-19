import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Corretora } from './corretora';
import { CorretoraService } from './corretora.service';

@Component({
  selector: 'app-corretora',
  templateUrl: './corretora.page.html',
  styleUrls: ['./corretora.page.scss'],
})
export class CorretoraPage implements OnInit {
  corretora: Corretora;

  constructor(
    private router: ActivatedRoute,
    private corretoraService: CorretoraService,
  ) {}

  ngOnInit() {
    const idCorretora = this.router.snapshot.paramMap.get('idCorretora');
    this.corretora = this.corretoraService.corretoraPeloId(idCorretora);
  }

}
