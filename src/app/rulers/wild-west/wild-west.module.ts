import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulersService } from '../rulers.service';
import { WildWestRulersService } from './wild-west-rulers.service';

@NgModule({
  providers: [{ provide: RulersService, useClass: WildWestRulersService }]
})
export class WildWestModule { }
