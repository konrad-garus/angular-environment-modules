import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulersService } from '../rulers.service';
import { PlaygroundRulersService } from './playground-rulers.service';
import { BullysMotherService } from './bullys-mother.service';

@NgModule({
  providers: [
    BullysMotherService,
    { provide: RulersService, useClass: PlaygroundRulersService }
  ]
})
export class PlaygroundModule { }
