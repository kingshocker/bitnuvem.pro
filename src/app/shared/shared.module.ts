import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  imports: [CommonModule],
  exports: [RodapeComponent],
  declarations: [RodapeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
