import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RulersService } from '../rulers.service';
import { BullysMotherService } from './bullys-mother.service';
import { Ruler } from '../ruler';

@Injectable()
export class PlaygroundRulersService implements RulersService {
  private steve: Ruler = { name: 'Steve the Little' };

  constructor(private bullysMother: BullysMotherService) { }

  get ruler(): Observable<Ruler> {
    return this.bullysMother.isBullyEating
      .map(bullyEating => bullyEating ? this.steve : this.bullysMother.bully);
  }
}
