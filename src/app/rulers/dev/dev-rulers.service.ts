import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RulersService } from '../rulers.service';

@Injectable()
export class DevRulersService implements RulersService {

  get ruler() {
    return Observable.of({ name: 'Developer' });
  }
}
