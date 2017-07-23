import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RulersService } from './rulers/rulers.service';
import { Ruler } from './rulers/ruler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  ruler: Observable<Ruler>;

  constructor(rulers: RulersService) {
    this.ruler = rulers.ruler;
  }
}
