import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulersService } from '../rulers.service';
import { DevRulersService } from './dev-rulers.service';

@NgModule({
  providers: [{ provide: RulersService, useClass: DevRulersService }]
})
export class DevModule { }
