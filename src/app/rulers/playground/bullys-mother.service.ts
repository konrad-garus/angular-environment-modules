import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RulersService } from '../rulers.service';
import { Ruler } from '../ruler';

@Injectable()
export class BullysMotherService {

  get bully(): Ruler {
    return { name: 'Jack the Bully' };
  }

  get isBullyEating(): Observable<boolean> {
    return Observable.concat(
      Observable.of(true),
      Observable.interval(2000).map(() => Math.random() < 0.3)
    );
  }
}
